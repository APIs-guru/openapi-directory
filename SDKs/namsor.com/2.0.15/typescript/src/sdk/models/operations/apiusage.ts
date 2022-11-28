import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ApiUsageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: ApiUsageSecurity;
}


export class ApiUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  apiPeriodUsageOut?: shared.ApiPeriodUsageOut;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
