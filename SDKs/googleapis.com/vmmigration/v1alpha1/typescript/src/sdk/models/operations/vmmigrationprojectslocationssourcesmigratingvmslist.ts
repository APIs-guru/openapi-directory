import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum {
    MigratingVmViewUnspecified = "MIGRATING_VM_VIEW_UNSPECIFIED"
,    MigratingVmViewBasic = "MIGRATING_VM_VIEW_BASIC"
,    MigratingVmViewFull = "MIGRATING_VM_VIEW_FULL"
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: VmmigrationProjectsLocationsSourcesMigratingVmsListViewEnum;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VmmigrationProjectsLocationsSourcesMigratingVmsListPathParams;

  @Metadata()
  queryParams: VmmigrationProjectsLocationsSourcesMigratingVmsListQueryParams;

  @Metadata()
  security: VmmigrationProjectsLocationsSourcesMigratingVmsListSecurity;
}


export class VmmigrationProjectsLocationsSourcesMigratingVmsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMigratingVmsResponse?: shared.ListMigratingVmsResponse;

  @Metadata()
  statusCode: number;
}
