import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AuthorTypeEnum {
    AuthorTypeUnspecified = "AUTHOR_TYPE_UNSPECIFIED"
,    RegularUser = "REGULAR_USER"
,    LocalGuide = "LOCAL_GUIDE"
,    Merchant = "MERCHANT"
}


// Author
/** 
 * Represents the author of a question or answer
**/
export class Author extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=profilePhotoUri" })
  profilePhotoUri?: string;

  @Metadata({ data: "json, name=type" })
  type?: AuthorTypeEnum;
}
