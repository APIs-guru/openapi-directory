import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VersionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    TypePreview = "TYPE_PREVIEW"
,    TypeGeneralAvailability = "TYPE_GENERAL_AVAILABILITY"
}


// Version
/** 
 * The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
**/
export class Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=availableFeatures" })
  availableFeatures?: string[];

  @Metadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: VersionTypeEnum;

  @Metadata({ data: "json, name=versionNumber" })
  versionNumber?: string;
}
