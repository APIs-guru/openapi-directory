import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguagePackageDependency } from "./languagepackagedependency";
import { FileLocation } from "./filelocation";

export enum PackageDataPackageTypeEnum {
    PackageTypeUnspecified = "PACKAGE_TYPE_UNSPECIFIED"
,    Os = "OS"
,    Maven = "MAVEN"
,    Go = "GO"
,    GoStdlib = "GO_STDLIB"
}


export class PackageData extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @Metadata({ data: "json, name=dependencyChain", elemType: shared.LanguagePackageDependency })
  dependencyChain?: LanguagePackageDependency[];

  @Metadata({ data: "json, name=fileLocation", elemType: shared.FileLocation })
  fileLocation?: FileLocation[];

  @Metadata({ data: "json, name=hashDigest" })
  hashDigest?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=packageType" })
  packageType?: PackageDataPackageTypeEnum;

  @Metadata({ data: "json, name=patchedCve" })
  patchedCve?: string[];

  @Metadata({ data: "json, name=unused" })
  unused?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
