import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum {
    MigratingVmViewUnspecified = "MIGRATING_VM_VIEW_UNSPECIFIED",
    MigratingVmViewBasic = "MIGRATING_VM_VIEW_BASIC",
    MigratingVmViewFull = "MIGRATING_VM_VIEW_FULL"
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

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
  view?: VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams;

  @SpeakeasyMetadata()
  queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams;

  @SpeakeasyMetadata()
  security: VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listMigratingVmsResponse?: shared.ListMigratingVmsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
