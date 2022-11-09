import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Label } from "./label";


// PubsubMessage
/** 
 * A message data and its labels.
**/
export class PubsubMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: string;

  @Metadata({ data: "json, name=label", elemType: shared.Label })
  label?: Label[];

  @Metadata({ data: "json, name=messageId" })
  messageId?: string;

  @Metadata({ data: "json, name=publishTime" })
  publishTime?: string;
}
