import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DataplexProjectsLocationsLakesZonesEntitiesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum DataplexProjectsLocationsLakesZonesEntitiesListViewEnum {
    EntityViewUnspecified = "ENTITY_VIEW_UNSPECIFIED",
    Tables = "TABLES",
    Filesets = "FILESETS"
}


export class DataplexProjectsLocationsLakesZonesEntitiesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: DataplexProjectsLocationsLakesZonesEntitiesListViewEnum;
}


export class DataplexProjectsLocationsLakesZonesEntitiesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DataplexProjectsLocationsLakesZonesEntitiesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DataplexProjectsLocationsLakesZonesEntitiesListPathParams;

  @SpeakeasyMetadata()
  queryParams: DataplexProjectsLocationsLakesZonesEntitiesListQueryParams;

  @SpeakeasyMetadata()
  security: DataplexProjectsLocationsLakesZonesEntitiesListSecurity;
}


export class DataplexProjectsLocationsLakesZonesEntitiesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  googleCloudDataplexV1ListEntitiesResponse?: shared.GoogleCloudDataplexV1ListEntitiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
