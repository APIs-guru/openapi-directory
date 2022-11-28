import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersAcknowledgeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;
}
