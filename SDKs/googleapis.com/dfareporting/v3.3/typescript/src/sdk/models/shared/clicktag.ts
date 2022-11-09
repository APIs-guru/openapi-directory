import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CreativeClickThroughUrl } from "./creativeclickthroughurl";


// ClickTag
/** 
 * Creative Click Tag.
**/
export class ClickTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickThroughUrl" })
  clickThroughUrl?: CreativeClickThroughUrl;

  @Metadata({ data: "json, name=eventName" })
  eventName?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
