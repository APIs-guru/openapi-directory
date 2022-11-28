import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DfareportingFloodlightActivitiesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}

export enum DfareportingFloodlightActivitiesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}

export enum DfareportingFloodlightActivitiesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class DfareportingFloodlightActivitiesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupIds" })
  floodlightActivityGroupIds?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupName" })
  floodlightActivityGroupName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupTagString" })
  floodlightActivityGroupTagString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupType" })
  floodlightActivityGroupType?: DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" })
  ids?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=searchString" })
  searchString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortField" })
  sortField?: DfareportingFloodlightActivitiesListSortFieldEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingFloodlightActivitiesListSortOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tagString" })
  tagString?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingFloodlightActivitiesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingFloodlightActivitiesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DfareportingFloodlightActivitiesListPathParams;

  @SpeakeasyMetadata()
  queryParams: DfareportingFloodlightActivitiesListQueryParams;

  @SpeakeasyMetadata()
  security: DfareportingFloodlightActivitiesListSecurity;
}


export class DfareportingFloodlightActivitiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  floodlightActivitiesListResponse?: shared.FloodlightActivitiesListResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
