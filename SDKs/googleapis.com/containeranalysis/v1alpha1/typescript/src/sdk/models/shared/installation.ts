import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";


export enum InstallationArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}


// Installation
/** 
 * This represents how a particular software package may be installed on a system.
**/
export class Installation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: InstallationArchitectureEnum;

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


// InstallationInput
/** 
 * This represents how a particular software package may be installed on a system.
**/
export class InstallationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: License;

  @SpeakeasyMetadata({ data: "json, name=location", elemType: Location })
  location?: Location[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}
