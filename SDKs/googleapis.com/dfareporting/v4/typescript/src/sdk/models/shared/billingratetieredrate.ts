import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BillingRateTieredRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=highValue" })
  highValue?: string;

  @SpeakeasyMetadata({ data: "json, name=lowValue" })
  lowValue?: string;

  @SpeakeasyMetadata({ data: "json, name=rateInMicros" })
  rateInMicros?: string;
}
