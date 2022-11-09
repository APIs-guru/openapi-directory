import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Version } from "./version";

export enum DistributionArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED"
,    X86 = "X86"
,    X64 = "X64"
}


// Distribution
/** 
 * This represents a particular channel of distribution for a given package. e.g. Debian's jessie-backports dpkg mirror
**/
export class Distribution extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: DistributionArchitectureEnum;

  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=latestVersion" })
  latestVersion?: Version;

  @Metadata({ data: "json, name=maintainer" })
  maintainer?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
