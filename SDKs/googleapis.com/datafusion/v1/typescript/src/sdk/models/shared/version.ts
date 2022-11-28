import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VersionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePreview = "TYPE_PREVIEW",
    TypeGeneralAvailability = "TYPE_GENERAL_AVAILABILITY"
}


// Version
/** 
 * The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
**/
export class Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=availableFeatures" })
  availableFeatures?: string[];

  @SpeakeasyMetadata({ data: "json, name=defaultVersion" })
  defaultVersion?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: VersionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=versionNumber" })
  versionNumber?: string;
}
