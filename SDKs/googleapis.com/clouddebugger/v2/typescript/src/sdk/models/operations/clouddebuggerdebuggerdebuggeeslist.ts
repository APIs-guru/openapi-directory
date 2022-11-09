import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ClouddebuggerDebuggerDebuggeesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=clientVersion" })
  clientVersion?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includeInactive" })
  includeInactive?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=project" })
  project?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class ClouddebuggerDebuggerDebuggeesListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class ClouddebuggerDebuggerDebuggeesListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ClouddebuggerDebuggerDebuggeesListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ClouddebuggerDebuggerDebuggeesListSecurityOption2;
}


export class ClouddebuggerDebuggerDebuggeesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ClouddebuggerDebuggerDebuggeesListQueryParams;

  @Metadata()
  security: ClouddebuggerDebuggerDebuggeesListSecurity;
}


export class ClouddebuggerDebuggerDebuggeesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDebuggeesResponse?: shared.ListDebuggeesResponse;

  @Metadata()
  statusCode: number;
}
