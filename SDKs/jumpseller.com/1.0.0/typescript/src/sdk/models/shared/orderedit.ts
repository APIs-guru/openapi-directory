import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrderEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=order" })
  order?: any;
}
