import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PaymentMethodFreq extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
