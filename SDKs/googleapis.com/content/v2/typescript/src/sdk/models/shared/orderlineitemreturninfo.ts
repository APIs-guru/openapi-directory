import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderLineItemReturnInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=daysToReturn" })
  daysToReturn?: number;

  @Metadata({ data: "json, name=isReturnable" })
  isReturnable?: boolean;

  @Metadata({ data: "json, name=policyUrl" })
  policyUrl?: string;
}
