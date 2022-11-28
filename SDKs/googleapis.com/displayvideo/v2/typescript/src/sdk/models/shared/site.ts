import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SiteInput
/** 
 * A single site. Sites are apps or websites belonging to a channel.
**/
export class SiteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=urlOrAppId" })
  urlOrAppId?: string;
}


// Site
/** 
 * A single site. Sites are apps or websites belonging to a channel.
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=urlOrAppId" })
  urlOrAppId?: string;
}
