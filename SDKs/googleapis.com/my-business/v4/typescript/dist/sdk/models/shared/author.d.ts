import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorTypeEnum {
    AuthorTypeUnspecified = "AUTHOR_TYPE_UNSPECIFIED",
    RegularUser = "REGULAR_USER",
    LocalGuide = "LOCAL_GUIDE",
    Merchant = "MERCHANT"
}
/**
 * Represents the author of a question or answer
**/
export declare class Author extends SpeakeasyBase {
    displayName?: string;
    profilePhotoUrl?: string;
    type?: AuthorTypeEnum;
}
