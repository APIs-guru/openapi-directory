import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCancelTestOrderByCustomerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
