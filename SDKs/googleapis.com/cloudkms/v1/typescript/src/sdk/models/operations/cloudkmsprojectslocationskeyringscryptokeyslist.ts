import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum {
    CryptoKeyVersionViewUnspecified = "CRYPTO_KEY_VERSION_VIEW_UNSPECIFIED"
,    Full = "FULL"
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=versionView" })
  versionView?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListVersionViewEnum;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurityOption2;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysListPathParams;

  @Metadata()
  queryParams: CloudkmsProjectsLocationsKeyRingsCryptoKeysListQueryParams;

  @Metadata()
  security: CloudkmsProjectsLocationsKeyRingsCryptoKeysListSecurity;
}


export class CloudkmsProjectsLocationsKeyRingsCryptoKeysListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCryptoKeysResponse?: shared.ListCryptoKeysResponse;

  @Metadata()
  statusCode: number;
}
