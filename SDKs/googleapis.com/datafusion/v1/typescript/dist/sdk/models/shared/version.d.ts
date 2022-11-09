import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VersionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePreview = "TYPE_PREVIEW",
    TypeGeneralAvailability = "TYPE_GENERAL_AVAILABILITY"
}
/**
 * The Data Fusion version. This proto message stores information about certain Data Fusion version, which is used for Data Fusion version upgrade.
**/
export declare class Version extends SpeakeasyBase {
    availableFeatures?: string[];
    defaultVersion?: boolean;
    type?: VersionTypeEnum;
    versionNumber?: string;
}
