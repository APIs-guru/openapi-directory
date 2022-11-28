import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OsBrowsersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=os" })
  os?: string;
}


export class OsBrowsersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuth: shared.SchemeBasicAuth;
}


export class OsBrowsersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: OsBrowsersQueryParams;

  @SpeakeasyMetadata()
  security: OsBrowsersSecurity;
}


export class OsBrowsersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDenied?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  osBrowsers?: any;
}
