import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OsBrowsersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=os" })
  os?: string;
}


export class OsBrowsersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class OsBrowsersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: OsBrowsersQueryParams;

  @Metadata()
  security: OsBrowsersSecurity;
}


export class OsBrowsersResponse extends SpeakeasyBase {
  @Metadata()
  accessDenied?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  osBrowsers?: any;
}
