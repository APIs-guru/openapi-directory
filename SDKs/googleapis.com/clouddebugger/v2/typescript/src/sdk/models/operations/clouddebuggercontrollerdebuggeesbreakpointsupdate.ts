import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=debuggeeId" })
  debuggeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams extends SpeakeasyBase {
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


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurityOption2;
}


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ClouddebuggerControllerDebuggeesBreakpointsUpdatePathParams;

  @Metadata()
  queryParams: ClouddebuggerControllerDebuggeesBreakpointsUpdateQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateActiveBreakpointRequest;

  @Metadata()
  security: ClouddebuggerControllerDebuggeesBreakpointsUpdateSecurity;
}


export class ClouddebuggerControllerDebuggeesBreakpointsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateActiveBreakpointResponse?: Map<string, any>;
}
