import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum VersionTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    TypePreview = "TYPE_PREVIEW",
    TypeGeneralAvailability = "TYPE_GENERAL_AVAILABILITY"
}
/**
 * The Data Fusion version.
**/
export declare class Version extends SpeakeasyBase {
    availableFeatures?: string[];
    defaultVersion?: boolean;
    type?: VersionTypeEnum;
    versionNumber?: string;
}
