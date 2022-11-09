import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UserBlogs
/** 
 * The container of blogs for this user.
**/
export class UserBlogs extends SpeakeasyBase {
  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}


// UserLocale
/** 
 * This user's locale
**/
export class UserLocale extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=variant" })
  variant?: string;
}


export class User extends SpeakeasyBase {
  @Metadata({ data: "json, name=about" })
  about?: string;

  @Metadata({ data: "json, name=blogs" })
  blogs?: UserBlogs;

  @Metadata({ data: "json, name=created" })
  created?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: UserLocale;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
