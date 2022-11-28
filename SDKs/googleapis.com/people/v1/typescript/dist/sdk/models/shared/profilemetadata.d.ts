import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ProfileMetadataObjectTypeEnum {
    ObjectTypeUnspecified = "OBJECT_TYPE_UNSPECIFIED",
    Person = "PERSON",
    Page = "PAGE"
}
export declare enum ProfileMetadataUserTypesEnum {
    UserTypeUnknown = "USER_TYPE_UNKNOWN",
    GoogleUser = "GOOGLE_USER",
    GplusUser = "GPLUS_USER",
    GoogleAppsUser = "GOOGLE_APPS_USER"
}
/**
 * The metadata about a profile.
**/
export declare class ProfileMetadata extends SpeakeasyBase {
    objectType?: ProfileMetadataObjectTypeEnum;
    userTypes?: ProfileMetadataUserTypesEnum[];
}
