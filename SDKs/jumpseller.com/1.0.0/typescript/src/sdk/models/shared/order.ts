import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Order extends SpeakeasyBase {
  @Metadata({ data: "json, name=order" })
  order?: any;
}
