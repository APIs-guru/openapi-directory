import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";


export enum PackageOccurrenceArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}


// PackageOccurrence
/** 
 * Details on how a particular software package was installed on a system.
**/
export class PackageOccurrence extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: PackageOccurrenceArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: License;

  @SpeakeasyMetadata({ data: "json, name=location", elemType: Location })
  location?: Location[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}


// PackageOccurrenceInput
/** 
 * Details on how a particular software package was installed on a system.
**/
export class PackageOccurrenceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: License;

  @SpeakeasyMetadata({ data: "json, name=location", elemType: Location })
  location?: Location[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}
