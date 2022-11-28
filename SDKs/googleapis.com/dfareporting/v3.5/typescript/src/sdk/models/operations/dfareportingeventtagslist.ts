import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingEventTagsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingEventTagsListEventTagTypesEnum {
    ImpressionImageEventTag = "IMPRESSION_IMAGE_EVENT_TAG",
    ImpressionJavascriptEventTag = "IMPRESSION_JAVASCRIPT_EVENT_TAG",
    ClickThroughEventTag = "CLICK_THROUGH_EVENT_TAG"
}

export enum DfareportingEventTagsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingEventTagsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class DfareportingEventTagsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=definitionsOnly" })
  definitionsOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=eventTagTypes" })
  eventTagTypes?: DfareportingEventTagsListEventTagTypesEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingEventTagsListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingEventTagsListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingEventTagsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingEventTagsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingEventTagsListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingEventTagsListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingEventTagsListSecurity;
}


export class DfareportingEventTagsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  eventTagsListResponse?: shared.EventTagsListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
