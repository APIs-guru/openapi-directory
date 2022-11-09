import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AuthorizedApp
/** 
 * An application you have authorized access to your Account through OAuth.
 * 
**/
export class AuthorizedApp extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=expiry" })
  expiry?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string;

  @Metadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @Metadata({ data: "json, name=website" })
  website?: string;
}
