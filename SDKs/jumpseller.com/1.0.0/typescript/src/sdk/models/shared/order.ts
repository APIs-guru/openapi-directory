import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Order extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: any;
}
