import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ClickThroughUrl
/** 
 * Click-through URL
**/
export class ClickThroughUrl extends SpeakeasyBase {
  @Metadata({ data: "json, name=computedClickThroughUrl" })
  computedClickThroughUrl?: string;

  @Metadata({ data: "json, name=customClickThroughUrl" })
  customClickThroughUrl?: string;

  @Metadata({ data: "json, name=defaultLandingPage" })
  defaultLandingPage?: boolean;

  @Metadata({ data: "json, name=landingPageId" })
  landingPageId?: string;
}
