import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OsconfigProjectsLocationsInstancesInventoriesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum OsconfigProjectsLocationsInstancesInventoriesListViewEnum {
    InventoryViewUnspecified = "INVENTORY_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


export class OsconfigProjectsLocationsInstancesInventoriesListQueryParams extends SpeakeasyBase {
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
  view?: OsconfigProjectsLocationsInstancesInventoriesListViewEnum;
}


export class OsconfigProjectsLocationsInstancesInventoriesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class OsconfigProjectsLocationsInstancesInventoriesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OsconfigProjectsLocationsInstancesInventoriesListPathParams;

  @SpeakeasyMetadata()
  queryParams: OsconfigProjectsLocationsInstancesInventoriesListQueryParams;

  @SpeakeasyMetadata()
  security: OsconfigProjectsLocationsInstancesInventoriesListSecurity;
}


export class OsconfigProjectsLocationsInstancesInventoriesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listInventoriesResponse?: shared.ListInventoriesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
