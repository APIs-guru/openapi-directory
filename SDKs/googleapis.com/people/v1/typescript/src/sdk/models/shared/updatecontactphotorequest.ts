import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UpdateContactPhotoRequestSourcesEnum {
    ReadSourceTypeUnspecified = "READ_SOURCE_TYPE_UNSPECIFIED"
,    ReadSourceTypeProfile = "READ_SOURCE_TYPE_PROFILE"
,    ReadSourceTypeContact = "READ_SOURCE_TYPE_CONTACT"
,    ReadSourceTypeDomainContact = "READ_SOURCE_TYPE_DOMAIN_CONTACT"
}


// UpdateContactPhotoRequest
/** 
 * A request to update an existing contact's photo. All requests must have a valid photo format: JPEG or PNG.
**/
export class UpdateContactPhotoRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=personFields" })
  personFields?: string;

  @Metadata({ data: "json, name=photoBytes" })
  photoBytes?: string;

  @Metadata({ data: "json, name=sources" })
  sources?: UpdateContactPhotoRequestSourcesEnum[];
}
