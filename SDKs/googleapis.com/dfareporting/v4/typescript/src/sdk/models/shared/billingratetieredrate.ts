import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class BillingRateTieredRate extends SpeakeasyBase {
  @Metadata({ data: "json, name=highValue" })
  highValue?: string;

  @Metadata({ data: "json, name=lowValue" })
  lowValue?: string;

  @Metadata({ data: "json, name=rateInMicros" })
  rateInMicros?: string;
}
