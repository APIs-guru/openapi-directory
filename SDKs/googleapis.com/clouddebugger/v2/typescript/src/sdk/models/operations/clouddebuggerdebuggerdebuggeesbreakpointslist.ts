import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;
}

export enum ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum {
    Capture = "CAPTURE",
    Log = "LOG"
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action.value" })
  actionValue?: ClouddebuggerDebuggerDebuggeesBreakpointsListActionValueEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=clientVersion" })
  clientVersion?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeAllUsers" })
  includeAllUsers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includeInactive" })
  includeInactive?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stripResults" })
  stripResults?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=waitToken" })
  waitToken?: string;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurityOption2;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ClouddebuggerDebuggerDebuggeesBreakpointsListPathParams;

  @SpeakeasyMetadata()
  queryParams: ClouddebuggerDebuggerDebuggeesBreakpointsListQueryParams;

  @SpeakeasyMetadata()
  security: ClouddebuggerDebuggerDebuggeesBreakpointsListSecurity;
}


export class ClouddebuggerDebuggerDebuggeesBreakpointsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listBreakpointsResponse?: shared.ListBreakpointsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
