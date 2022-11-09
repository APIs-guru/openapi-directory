import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouddebuggerControllerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=agentId" })
  agentId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=successOnTimeout" })
  successOnTimeout?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=waitToken" })
  waitToken?: string;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouddebuggerControllerDebuggeesBreakpointsListPathParams;

  @Metadata()
  queryParams: ClouddebuggerControllerDebuggeesBreakpointsListQueryParams;

  @Metadata()
  security: ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listActiveBreakpointsResponse?: shared.ListActiveBreakpointsResponse;

  @Metadata()
  statusCode: number;
}
