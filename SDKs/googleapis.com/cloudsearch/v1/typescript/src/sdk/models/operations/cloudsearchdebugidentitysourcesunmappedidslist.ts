import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudsearchDebugIdentitysourcesUnmappedidsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}

export enum CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    NotFound = "NOT_FOUND"
,    IdentitySourceNotFound = "IDENTITY_SOURCE_NOT_FOUND"
,    IdentitySourceMisconfigured = "IDENTITY_SOURCE_MISCONFIGURED"
,    TooManyMappingsFound = "TOO_MANY_MAPPINGS_FOUND"
,    InternalError = "INTERNAL_ERROR"
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" })
  debugOptionsEnableDebugging?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=resolutionStatusCode" })
  resolutionStatusCode?: CloudsearchDebugIdentitysourcesUnmappedidsListResolutionStatusCodeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudsearchDebugIdentitysourcesUnmappedidsListSecurityOption2;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudsearchDebugIdentitysourcesUnmappedidsListPathParams;

  @Metadata()
  queryParams: CloudsearchDebugIdentitysourcesUnmappedidsListQueryParams;

  @Metadata()
  security: CloudsearchDebugIdentitysourcesUnmappedidsListSecurity;
}


export class CloudsearchDebugIdentitysourcesUnmappedidsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listUnmappedIdentitiesResponse?: shared.ListUnmappedIdentitiesResponse;

  @Metadata()
  statusCode: number;
}
