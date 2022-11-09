import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}

export enum ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum {
    CanaryOptionUnspecified = "CANARY_OPTION_UNSPECIFIED"
,    CanaryOptionTryEnable = "CANARY_OPTION_TRY_ENABLE"
,    CanaryOptionTryDisable = "CANARY_OPTION_TRY_DISABLE"
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=canaryOption" })
  canaryOption?: ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientVersion" })
  clientVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams;

  @Metadata()
  queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.Breakpoint;

  @Metadata()
  security: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  setBreakpointResponse?: shared.SetBreakpointResponse;

  @Metadata()
  statusCode: number;
}
