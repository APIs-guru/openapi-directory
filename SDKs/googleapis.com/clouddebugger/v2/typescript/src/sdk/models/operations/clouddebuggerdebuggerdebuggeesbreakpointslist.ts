import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}

export enum ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum {
    Capture = "CAPTURE"
,    Log = "LOG"
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=action.value" })
  actionValue?: ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientVersion" })
  clientVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeAllUsers" })
  includeAllUsers?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeInactive" })
  includeInactive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stripResults" })
  stripResults?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=waitToken" })
  waitToken?: string;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams;

  @Metadata()
  queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams;

  @Metadata()
  security: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBreakpointsResponse?: shared.ListBreakpointsResponse;

  @Metadata()
  statusCode: number;
}
