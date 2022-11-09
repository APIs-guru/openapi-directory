import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";

export enum PackageOccurrenceArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED"
,    X86 = "X86"
,    X64 = "X64"
}


// PackageOccurrence
/** 
 * Details on how a particular software package was installed on a system.
**/
export class PackageOccurrence extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: PackageOccurrenceArchitectureEnum;

  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=license" })
  license?: License;

  @Metadata({ data: "json, name=location", elemType: shared.Location })
  location?: Location[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=version" })
  version?: Version;
}
