import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=domain" })
  domain: string;
}


export class ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationPathParams;

  @SpeakeasyMetadata()
  queryParams: ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.EnableMigrationRequest;

  @SpeakeasyMetadata()
  security: ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationSecurity;
}


export class ManagedidentitiesProjectsLocationsGlobalDomainsEnableMigrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  operation?: shared.Operation;

  @SpeakeasyMetadata()
  statusCode: number;
}
