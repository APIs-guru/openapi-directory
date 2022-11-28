import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiUsageHistoryAggregateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageHistoryAggregateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ApiUsageHistoryAggregateSecurity;
}


export class ApiUsageHistoryAggregateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiUsageAggregatedOut?: shared.ApiUsageAggregatedOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
