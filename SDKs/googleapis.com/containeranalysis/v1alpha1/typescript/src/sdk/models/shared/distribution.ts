import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";


export enum DistributionArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}


// Distribution
/** 
 * This represents a particular channel of distribution for a given package. e.g. Debian's jessie-backports dpkg mirror
**/
export class Distribution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: DistributionArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=latestVersion" })
  latestVersion?: Version;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
