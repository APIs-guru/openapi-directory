import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrdersCancelTestOrderByCustomerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;
}
