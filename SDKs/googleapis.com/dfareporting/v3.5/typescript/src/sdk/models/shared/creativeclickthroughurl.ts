import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreativeClickThroughUrl
/** 
 * Click-through URL
**/
export class CreativeClickThroughUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computedClickThroughUrl" })
  computedClickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=customClickThroughUrl" })
  customClickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=landingPageId" })
  landingPageId?: string;
}
