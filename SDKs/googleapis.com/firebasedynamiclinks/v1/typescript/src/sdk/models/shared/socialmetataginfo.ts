import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SocialMetaTagInfo
/** 
 * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
**/
export class SocialMetaTagInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=socialDescription" })
  socialDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=socialImageLink" })
  socialImageLink?: string;

  @SpeakeasyMetadata({ data: "json, name=socialTitle" })
  socialTitle?: string;
}
