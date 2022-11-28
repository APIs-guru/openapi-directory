import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DatafusionProjectsLocationsInstancesNamespacesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum DatafusionProjectsLocationsInstancesNamespacesListViewEnum {
    NamespaceViewUnspecified = "NAMESPACE_VIEW_UNSPECIFIED",
    NamespaceViewBasic = "NAMESPACE_VIEW_BASIC",
    NamespaceViewFull = "NAMESPACE_VIEW_FULL"
}


export class DatafusionProjectsLocationsInstancesNamespacesListQueryParams extends SpeakeasyBase {
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
  view?: DatafusionProjectsLocationsInstancesNamespacesListViewEnum;
}


export class DatafusionProjectsLocationsInstancesNamespacesListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class DatafusionProjectsLocationsInstancesNamespacesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DatafusionProjectsLocationsInstancesNamespacesListPathParams;

  @SpeakeasyMetadata()
  queryParams: DatafusionProjectsLocationsInstancesNamespacesListQueryParams;

  @SpeakeasyMetadata()
  security: DatafusionProjectsLocationsInstancesNamespacesListSecurity;
}


export class DatafusionProjectsLocationsInstancesNamespacesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listNamespacesResponse?: shared.ListNamespacesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
