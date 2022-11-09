import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SubscriptionBatchUpdateRequest } from "./subscriptionbatchupdaterequest";


export class BatchInputSubscriptionBatchUpdateRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.SubscriptionBatchUpdateRequest })
  inputs: SubscriptionBatchUpdateRequest[];
}
