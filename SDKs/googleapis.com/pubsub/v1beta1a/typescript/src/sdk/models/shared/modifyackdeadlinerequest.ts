import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ModifyAckDeadlineRequest
/** 
 * Request for the ModifyAckDeadline method.
**/
export class ModifyAckDeadlineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ackDeadlineSeconds" })
  ackDeadlineSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ackId" })
  ackId?: string;

  @SpeakeasyMetadata({ data: "json, name=ackIds" })
  ackIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=subscription" })
  subscription?: string;
}
