import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ClickThroughUrl
/** 
 * Click-through URL
**/
export class ClickThroughUrl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=computedClickThroughUrl" })
  computedClickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=customClickThroughUrl" })
  customClickThroughUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultLandingPage" })
  defaultLandingPage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=landingPageId" })
  landingPageId?: string;
}
