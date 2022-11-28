import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloudsearchIndexingDatasourcesItemsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class CloudsearchIndexingDatasourcesItemsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=brief" })
  brief?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" })
  callback?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=connectorName" })
  connectorName?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=debugOptions.enableDebugging" })
  debugOptionsEnableDebugging?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

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
}


export class CloudsearchIndexingDatasourcesItemsListSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchIndexingDatasourcesItemsListSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class CloudsearchIndexingDatasourcesItemsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: CloudsearchIndexingDatasourcesItemsListSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: CloudsearchIndexingDatasourcesItemsListSecurityOption2;
}


export class CloudsearchIndexingDatasourcesItemsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloudsearchIndexingDatasourcesItemsListPathParams;

  @SpeakeasyMetadata()
  queryParams: CloudsearchIndexingDatasourcesItemsListQueryParams;

  @SpeakeasyMetadata()
  security: CloudsearchIndexingDatasourcesItemsListSecurity;
}


export class CloudsearchIndexingDatasourcesItemsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listItemsResponse?: shared.ListItemsResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
