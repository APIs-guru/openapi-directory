import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserBlogs
/** 
 * The container of blogs for this user.
**/
export class UserBlogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}


// UserLocale
/** 
 * This user's locale
**/
export class UserLocale extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=variant" })
  variant?: string;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=about" })
  about?: string;

  @SpeakeasyMetadata({ data: "json, name=blogs" })
  blogs?: UserBlogs;

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: UserLocale;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
