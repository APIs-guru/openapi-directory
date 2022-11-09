import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DfareportingFloodlightActivitiesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=profileId" })
  profileId: string;
}

export enum DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum {
    Counter = "COUNTER"
,    Sale = "SALE"
}

export enum DfareportingFloodlightActivitiesListSortFieldEnum {
    Id = "ID"
,    Name = "NAME"
}

export enum DfareportingFloodlightActivitiesListSortOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class DfareportingFloodlightActivitiesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupIds" })
  floodlightActivityGroupIds?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupName" })
  floodlightActivityGroupName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupTagString" })
  floodlightActivityGroupTagString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightActivityGroupType" })
  floodlightActivityGroupType?: DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=floodlightConfigurationId" })
  floodlightConfigurationId?: string;

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
  sortField?: DfareportingFloodlightActivitiesListSortFieldEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortOrder" })
  sortOrder?: DfareportingFloodlightActivitiesListSortOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tagString" })
  tagString?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class DfareportingFloodlightActivitiesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DfareportingFloodlightActivitiesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DfareportingFloodlightActivitiesListPathParams;

  @Metadata()
  queryParams: DfareportingFloodlightActivitiesListQueryParams;

  @Metadata()
  security: DfareportingFloodlightActivitiesListSecurity;
}


export class DfareportingFloodlightActivitiesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  floodlightActivitiesListResponse?: shared.FloodlightActivitiesListResponse;

  @Metadata()
  statusCode: number;
}
