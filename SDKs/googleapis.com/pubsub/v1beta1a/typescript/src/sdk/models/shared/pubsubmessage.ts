import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Label } from "./label";



// PubsubMessage
/** 
 * A message data and its labels.
**/
export class PubsubMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: string;

  @SpeakeasyMetadata({ data: "json, name=label", elemType: Label })
  label?: Label[];

  @SpeakeasyMetadata({ data: "json, name=messageId" })
  messageId?: string;

  @SpeakeasyMetadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
