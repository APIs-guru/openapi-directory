import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: any;
}
