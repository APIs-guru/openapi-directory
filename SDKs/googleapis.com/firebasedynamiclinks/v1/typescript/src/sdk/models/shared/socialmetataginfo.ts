import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SocialMetaTagInfo
/** 
 * Parameters for social meta tag params. Used to set meta tag data for link previews on social sites.
**/
export class SocialMetaTagInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=socialDescription" })
  socialDescription?: string;

  @Metadata({ data: "json, name=socialImageLink" })
  socialImageLink?: string;

  @Metadata({ data: "json, name=socialTitle" })
  socialTitle?: string;
}
