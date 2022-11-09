import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LiaOnDisplayToOrderSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=shippingCostPolicyUrl" })
  shippingCostPolicyUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
