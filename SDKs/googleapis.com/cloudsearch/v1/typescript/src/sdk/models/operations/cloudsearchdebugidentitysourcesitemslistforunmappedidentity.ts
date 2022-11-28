import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" })
  debugOptionsEnableDebugging?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=groupResourceName" })
  groupResourceName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userResourceName" })
  userResourceName?: string;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurityOption2;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudsearchDebugIdentitysourcesItemsListForunmappedidentityQueryParams;

  @SpeakeasyMetadata()
  security: CloudsearchDebugIdentitysourcesItemsListForunmappedidentitySecurity;
}


export class CloudsearchDebugIdentitysourcesItemsListForunmappedidentityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listItemNamesForUnmappedIdentityResponse?: shared.ListItemNamesForUnmappedIdentityResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
