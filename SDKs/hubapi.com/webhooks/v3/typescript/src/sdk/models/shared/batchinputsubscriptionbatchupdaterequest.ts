import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionBatchUpdateRequest } from "./subscriptionbatchupdaterequest";



export class BatchInputSubscriptionBatchUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: SubscriptionBatchUpdateRequest })
  inputs: SubscriptionBatchUpdateRequest[];
}
