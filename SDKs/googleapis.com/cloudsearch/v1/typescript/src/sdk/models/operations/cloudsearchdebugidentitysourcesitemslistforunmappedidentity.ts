import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=groupResourceName" })
  groupResourceName?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userResourceName" })
  userResourceName?: string;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams;

  @Metadata()
  queryParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams;

  @Metadata()
  security: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listItemNamesForUnmappedIdentityResponse?: shared.ListItemNamesForUnmappedIdentityResponse;

  @Metadata()
  statusCode: number;
}
