import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Digest } from "./digest";
import { Distribution } from "./distribution";
import { License } from "./license";
import { Version } from "./version";

export enum PackageArchitectureEnum {
    ArchitectureUnspecified = "ARCHITECTURE_UNSPECIFIED"
,    X86 = "X86"
,    X64 = "X64"
}


// Package
/** 
 * This represents a particular package that is distributed over various channels. e.g. glibc (aka libc6) is distributed by many, at various versions.
**/
export class Package extends SpeakeasyBase {
  @Metadata({ data: "json, name=architecture" })
  architecture?: PackageArchitectureEnum;

  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=digest", elemType: shared.Digest })
  digest?: Digest[];

  @Metadata({ data: "json, name=distribution", elemType: shared.Distribution })
  distribution?: Distribution[];

  @Metadata({ data: "json, name=license" })
  license?: License;

  @Metadata({ data: "json, name=maintainer" })
  maintainer?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=version" })
  version?: Version;
}
