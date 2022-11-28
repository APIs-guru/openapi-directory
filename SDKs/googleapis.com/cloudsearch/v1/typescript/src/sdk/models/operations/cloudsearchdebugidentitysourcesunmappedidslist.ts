import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudsearchDebugIdentitysourcesUnmappedidsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    NotFound = "NOT_FOUND",
    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND",
    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED",
    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND",
    InternalError = "INTERNAL_ERROR"
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" })
  debugOptionsEnableDebugging?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=resolutionStatusCode" })
  resolutionStatusCode?: CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudsearchDebugIdentitysourcesUnmappedidsListPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams;

  @SpeakeasyMetadata()
  security: CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listUnmappedIdentitiesResponse?: shared.ListUnmappedIdentitiesResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
