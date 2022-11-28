import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";



// ClickTag
/** 
 * Creative Click Tag.
**/
export class ClickTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: CreativeClickThroughUrl;

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
