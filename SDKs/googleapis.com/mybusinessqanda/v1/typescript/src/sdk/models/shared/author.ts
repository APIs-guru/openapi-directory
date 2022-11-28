import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AuthorTypeEnum {
    AuthorTypeUnspecified = "AUTHOR_TYPE_UNSPECIFIED",
    RegularUser = "REGULAR_USER",
    LocalGuide = "LOCAL_GUIDE",
    Merchant = "MERCHANT"
}


// Author
/** 
 * Represents the author of a question or answer
**/
export class Author extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=profilePhotoUri" })
  profilePhotoUri?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AuthorTypeEnum;
}
