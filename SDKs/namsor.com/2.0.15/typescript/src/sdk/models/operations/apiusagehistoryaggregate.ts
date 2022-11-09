import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiUsageHistoryAggregateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageHistoryAggregateRequest extends SpeakeasyBase {
  @Metadata()
  security: ApiUsageHistoryAggregateSecurity;
}


export class ApiUsageHistoryAggregateResponse extends SpeakeasyBase {
  @Metadata()
  apiUsageAggregatedOut?: shared.ApiUsageAggregatedOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
