import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ServiceFeesInputModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=cancellationFeeAmount" })
  cancellationFeeAmount?: number;

  @Metadata({ data: "json, name=cancellationFeeTaxable" })
  cancellationFeeTaxable?: boolean;

  @Metadata({ data: "json, name=feeAmount" })
  feeAmount?: number;

  @Metadata({ data: "json, name=feeTaxable" })
  feeTaxable?: boolean;

  @Metadata({ data: "json, name=nonRefundable" })
  nonRefundable?: boolean;
}
