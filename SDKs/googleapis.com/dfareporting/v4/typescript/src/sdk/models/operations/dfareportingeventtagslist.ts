import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingEventTagsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingEventTagsListEventTagTypesEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG"
,    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG"
,    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}

export enum DfareportingEventTagsListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingEventTagsListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingEventTagsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=adId" })
  adId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=definitionsOnly" })
  definitionsOnly?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=eventTagTypes" })
  eventTagTypes?: DfareportingEventTagsListEventTagTypesEnum[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingEventTagsListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingEventTagsListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingEventTagsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingEventTagsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingEventTagsListPathParams;

  @Metadata()
  queryParams: DfareportingEventTagsListQueryParams;

  @Metadata()
  security: DfareportingEventTagsListSecurity;
}


export class DfareportingEventTagsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  eventTagsListResponse?: shared.EventTagsListResponse;

  @Metadata()
  statusCode: number;
}
