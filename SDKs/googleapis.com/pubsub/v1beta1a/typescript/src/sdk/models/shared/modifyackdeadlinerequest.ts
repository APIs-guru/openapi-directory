import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ModifyAckDeadlineRequest
/** 
 * Request for the ModifyAckDeadline method.
**/
export class ModifyAckDeadlineRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @Metadata({ data: "json, name=ackId" })
  ackId?: string;

  @Metadata({ data: "json, name=ackIds" })
  ackIds?: string[];

  @Metadata({ data: "json, name=subscription" })
  subscription?: string;
}
