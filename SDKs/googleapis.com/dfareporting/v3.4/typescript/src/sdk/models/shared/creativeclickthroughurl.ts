import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CreativeClickThroughUrl
/** 
 * Click-through URL
**/
export class CreativeClickThroughUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=computedClickThroughUrl" })
  computedClickThroughUrl?: string;

  @Metadata({ data: "json, name=customClickThroughUrl" })
  customClickThroughUrl?: string;

  @Metadata({ data: "json, name=landingPageId" })
  landingPageId?: string;
}
