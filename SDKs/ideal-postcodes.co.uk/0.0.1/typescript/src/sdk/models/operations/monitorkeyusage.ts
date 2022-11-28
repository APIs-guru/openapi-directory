import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MonitorKeyUsagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class MonitorKeyUsageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=end" })
  end?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=licensee" })
  licensee?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;
}


export class MonitorKeyUsageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  userToken: shared.SchemeUserToken;
}


export class MonitorKeyUsageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MonitorKeyUsagePathParams;

  @SpeakeasyMetadata()
  queryParams: MonitorKeyUsageQueryParams;

  @SpeakeasyMetadata()
  security: MonitorKeyUsageSecurity;
}


export class MonitorKeyUsageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseSchema?: shared.ErrorResponseSchema;

  @SpeakeasyMetadata()
  keyUsageResponseSchema?: shared.KeyUsageResponseSchema;

  @SpeakeasyMetadata()
  statusCode: number;
}
