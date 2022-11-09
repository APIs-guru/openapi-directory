import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentOrdersRejectreturnlineitemPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=orderId" })
  orderId: string;
}


export class ContentOrdersRejectreturnlineitemQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ContentOrdersRejectreturnlineitemSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentOrdersRejectreturnlineitemRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentOrdersRejectreturnlineitemPathParams;

  @Metadata()
  queryParams: ContentOrdersRejectreturnlineitemQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.OrdersRejectReturnLineItemRequest;

  @Metadata()
  security: ContentOrdersRejectreturnlineitemSecurity;
}


export class ContentOrdersRejectreturnlineitemResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ordersRejectReturnLineItemResponse?: shared.OrdersRejectReturnLineItemResponse;

  @Metadata()
  statusCode: number;
}
