import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersAdvanceTestOrderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
