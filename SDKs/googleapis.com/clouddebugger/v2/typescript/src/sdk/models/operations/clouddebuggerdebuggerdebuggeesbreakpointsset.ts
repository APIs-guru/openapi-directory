import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}

export enum ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum {
    CanaryOptionUnspecified = "CANARY_OPTION_UNSPECIFIED",
    CanaryOptionTryEnable = "CANARY_OPTION_TRY_ENABLE",
    CanaryOptionTryDisable = "CANARY_OPTION_TRY_DISABLE"
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=canaryOption" })
  canaryOption?: ClouddebuggerDebuggerDebuggeesBreakpointsSetCanaryOptionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" })
  clientVersion?: string;

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


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurityOption2;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetPathParams;

  @SpeakeasyMetadata()
  queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsSetQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.Breakpoint;

  @SpeakeasyMetadata()
  security: ClouddebuggerDebuggerDebuggeesBreakpointsSetSecurity;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  setBreakpointResponse?: shared.SetBreakpointResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
