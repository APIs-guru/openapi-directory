import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LiaOnDisplayToOrderSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=shippingCostPolicyUrl" })
  shippingCostPolicyUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
