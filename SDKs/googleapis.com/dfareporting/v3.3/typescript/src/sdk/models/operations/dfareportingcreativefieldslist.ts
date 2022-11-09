import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingCreativeFieldsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingCreativeFieldsListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingCreativeFieldsListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingCreativeFieldsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserIds" })
  advertiserIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingCreativeFieldsListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingCreativeFieldsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingCreativeFieldsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingCreativeFieldsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingCreativeFieldsListPathParams;

  @Metadata()
  queryParams: DfareportingCreativeFieldsListQueryParams;

  @Metadata()
  security: DfareportingCreativeFieldsListSecurity;
}


export class DfareportingCreativeFieldsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  creativeFieldsListResponse?: shared.CreativeFieldsListResponse;

  @Metadata()
  statusCode: number;
}
