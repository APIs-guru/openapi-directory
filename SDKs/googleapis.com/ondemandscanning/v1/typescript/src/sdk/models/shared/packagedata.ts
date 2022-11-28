import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguagePackageDependency } from "./languagepackagedependency";
import { FileLocation } from "./filelocation";


export enum PackageDataPackageTypeEnum {
    PackageTypeUnspecified = "PACKAGE_TYPE_UNSPECIFIED",
    Os = "OS",
    Maven = "MAVEN",
    Go = "GO",
    GoStdlib = "GO_STDLIB"
}


export class PackageData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpeUri" })
  cpeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=dependencyChain", elemType: LanguagePackageDependency })
  dependencyChain?: LanguagePackageDependency[];

  @SpeakeasyMetadata({ data: "json, name=fileLocation", elemType: FileLocation })
  fileLocation?: FileLocation[];

  @SpeakeasyMetadata({ data: "json, name=hashDigest" })
  hashDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=osVersion" })
  osVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=packageType" })
  packageType?: PackageDataPackageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=patchedCve" })
  patchedCve?: string[];

  @SpeakeasyMetadata({ data: "json, name=unused" })
  unused?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
