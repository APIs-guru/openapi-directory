import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderLineItemReturnInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=daysToReturn" })
  daysToReturn?: number;

  @SpeakeasyMetadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=policyUrl" })
  policyUrl?: string;
}
