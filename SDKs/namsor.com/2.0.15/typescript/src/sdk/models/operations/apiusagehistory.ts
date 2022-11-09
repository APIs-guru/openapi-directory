import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiUsageHistorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageHistoryRequest extends SpeakeasyBase {
  @Metadata()
  security: ApiUsageHistorySecurity;
}


export class ApiUsageHistoryResponse extends SpeakeasyBase {
  @Metadata()
  apiUsageHistoryOut?: shared.ApiUsageHistoryOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
