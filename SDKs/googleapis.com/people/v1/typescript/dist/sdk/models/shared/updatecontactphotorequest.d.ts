import { SpeakeasyBase } from "../../../internal/utils";
export declare enum UpdateContactPhotoRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED",
    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE",
    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT",
    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}
/**
 * A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
**/
export declare class UpdateContactPhotoRequest extends SpeakeasyBase {
    personFields?: string;
    photoBytes?: string;
    sources?: UpdateContactPhotoRequestSourcesEnum[];
}
