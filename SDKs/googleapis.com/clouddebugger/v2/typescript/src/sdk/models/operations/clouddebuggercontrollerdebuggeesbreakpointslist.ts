import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClouddebuggerControllerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=agentId" })
  agentId?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=successOnTimeout" })
  successOnTimeout?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=waitToken" })
  waitToken?: string;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClouddebuggerControllerDebuggeesBreakpointsListSecurityOption2;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClouddebuggerControllerDebuggeesBreakpointsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClouddebuggerControllerDebuggeesBreakpointsListQueryParams;

  @SpeakeasyMetadata()
  security: ClouddebuggerControllerDebuggeesBreakpointsListSecurity;
}


export class ClouddebuggerControllerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listActiveBreakpointsResponse?: shared.ListActiveBreakpointsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
