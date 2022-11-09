import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class MonitorKeyUsagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class MonitorKeyUsageQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class MonitorKeyUsageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class MonitorKeyUsageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: MonitorKeyUsagePathParams;

  @Metadata()
  queryParams: MonitorKeyUsageQueryParams;

  @Metadata()
  security: MonitorKeyUsageSecurity;
}


export class MonitorKeyUsageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @Metadata()
  keyUsageResponseSchema?: shared.KeyUsageResponseSchema;

  @Metadata()
  statusCode: number;
}
