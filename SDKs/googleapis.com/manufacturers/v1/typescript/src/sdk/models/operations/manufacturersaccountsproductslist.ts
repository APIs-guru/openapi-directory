import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ManufacturersAccountsProductsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum ManufacturersAccountsProductsListIncludeEnum {
    Unknown = "UNKNOWN"
,    Attributes = "ATTRIBUTES"
,    Issues = "ISSUES"
,    DestinationStatuses = "DESTINATION_STATUSES"
}


export class ManufacturersAccountsProductsListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=include" })
  include?: ManufacturersAccountsProductsListIncludeEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ManufacturersAccountsProductsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ManufacturersAccountsProductsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ManufacturersAccountsProductsListPathParams;

  @Metadata()
  queryParams: ManufacturersAccountsProductsListQueryParams;

  @Metadata()
  security: ManufacturersAccountsProductsListSecurity;
}


export class ManufacturersAccountsProductsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listProductsResponse?: shared.ListProductsResponse;

  @Metadata()
  statusCode: number;
}
