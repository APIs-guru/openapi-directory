import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiUsageHistorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageHistoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ApiUsageHistorySecurity;
}


export class ApiUsageHistoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiUsageHistoryOut?: shared.ApiUsageHistoryOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
