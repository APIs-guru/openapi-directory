import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Digest } from "./digest";
import { Distribution } from "./distribution";
import { License } from "./license";
import { Version } from "./version";


export enum PackageArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED",
    X86 = "X86",
    X64 = "X64"
}


// Package
/** 
 * Package represents a particular package version.
**/
export class Package extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=architecture" })
  architecture?: PackageArchitectureEnum;

  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=digest", elemType: Digest })
  digest?: Digest[];

  @SpeakeasyMetadata({ data: "json, name=distribution", elemType: Distribution })
  distribution?: Distribution[];

  @SpeakeasyMetadata({ data: "json, name=license" })
  license?: License;

  @SpeakeasyMetadata({ data: "json, name=maintainer" })
  maintainer?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: Version;
}
