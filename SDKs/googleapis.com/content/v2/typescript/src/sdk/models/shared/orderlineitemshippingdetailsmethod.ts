import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderLineItemShippingDetailsMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=maxDaysInTransit" })
  maxDaysInTransit?: number;

  @SpeakeasyMetadata({ data: "json, name=methodName" })
  methodName?: string;

  @SpeakeasyMetadata({ data: "json, name=minDaysInTransit" })
  minDaysInTransit?: number;
}
