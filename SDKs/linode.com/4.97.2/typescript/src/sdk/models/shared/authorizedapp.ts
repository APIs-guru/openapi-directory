import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AuthorizedApp
/** 
 * An application you have authorized access to your Account through OAuth.
 * 
**/
export class AuthorizedApp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string;

  @SpeakeasyMetadata({ data: "json, name=thumbnail_url" })
  thumbnailUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=website" })
  website?: string;
}
