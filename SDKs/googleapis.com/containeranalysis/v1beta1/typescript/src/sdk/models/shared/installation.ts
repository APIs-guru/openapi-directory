import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { License } from "./license";
import { Location } from "./location";
import { Version } from "./version";

export enum InstallationArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED"
,    X86 = "X86"
,    X64 = "X64"
}


// Installation
/** 
 * This represents how a particular software package may be installed on a system.
**/
export class Installation extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: InstallationArchitectureEnum;

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
