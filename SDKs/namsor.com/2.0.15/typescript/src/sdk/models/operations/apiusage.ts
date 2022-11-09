import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ApiUsageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apiKey: shared.SchemeApiKey;
}


export class ApiUsageRequest extends SpeakeasyBase {
  @Metadata()
  security: ApiUsageSecurity;
}


export class ApiUsageResponse extends SpeakeasyBase {
  @Metadata()
  apiPeriodUsageOut?: shared.ApiPeriodUsageOut;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
