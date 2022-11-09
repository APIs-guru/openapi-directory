import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderLineItemShippingDetailsMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=maxDaysInTransit" })
  maxDaysInTransit?: number;

  @Metadata({ data: "json, name=methodName" })
  methodName?: string;

  @Metadata({ data: "json, name=minDaysInTransit" })
  minDaysInTransit?: number;
}
