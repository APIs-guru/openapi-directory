import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum ContentOrdersGettestordertemplateTemplateNameEnum {
    Template1 = "TEMPLATE1"
,    Template2 = "TEMPLATE2"
,    Template1A = "TEMPLATE1A"
,    Template1B = "TEMPLATE1B"
,    Template3 = "TEMPLATE3"
}


export class ContentOrdersGettestordertemplatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=templateName" })
  templateName: ContentOrdersGettestordertemplateTemplateNameEnum;
}


export class ContentOrdersGettestordertemplateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=country" })
  country?: string;

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


export class ContentOrdersGettestordertemplateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentOrdersGettestordertemplateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentOrdersGettestordertemplatePathParams;

  @Metadata()
  queryParams: ContentOrdersGettestordertemplateQueryParams;

  @Metadata()
  security: ContentOrdersGettestordertemplateSecurity;
}


export class ContentOrdersGettestordertemplateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ordersGetTestOrderTemplateResponse?: shared.OrdersGetTestOrderTemplateResponse;

  @Metadata()
  statusCode: number;
}
