import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ServiceFeesUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cancellationFeeAmount" })
  cancellationFeeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=cancellationFeeTaxable" })
  cancellationFeeTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=feeTaxable" })
  feeTaxable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=nonRefundable" })
  nonRefundable?: boolean;
}
