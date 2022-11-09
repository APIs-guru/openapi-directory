import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ContentOrderreturnsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=merchantId" })
  merchantId: string;
}

export enum ContentOrderreturnsListOrderByEnum {
    ReturnCreationTimeDesc = "RETURN_CREATION_TIME_DESC"
,    ReturnCreationTimeAsc = "RETURN_CREATION_TIME_ASC"
}


export class ContentOrderreturnsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdEndDate" })
  createdEndDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdStartDate" })
  createdStartDate?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: ContentOrderreturnsListOrderByEnum;

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


export class ContentOrderreturnsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ContentOrderreturnsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ContentOrderreturnsListPathParams;

  @Metadata()
  queryParams: ContentOrderreturnsListQueryParams;

  @Metadata()
  security: ContentOrderreturnsListSecurity;
}


export class ContentOrderreturnsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  orderreturnsListResponse?: shared.OrderreturnsListResponse;

  @Metadata()
  statusCode: number;
}
