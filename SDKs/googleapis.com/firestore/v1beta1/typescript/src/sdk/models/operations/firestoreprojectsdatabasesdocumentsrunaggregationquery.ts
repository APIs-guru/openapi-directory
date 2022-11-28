import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" })
  dollarXgafv?: shared.XgafvEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" })
  accessToken?: string;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurityOption2;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirestoreProjectsDatabasesDocumentsRunAggregationQueryPathParams;

  @SpeakeasyMetadata()
  queryParams: FirestoreProjectsDatabasesDocumentsRunAggregationQueryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.RunAggregationQueryRequest;

  @SpeakeasyMetadata()
  security: FirestoreProjectsDatabasesDocumentsRunAggregationQuerySecurity;
}


export class FirestoreProjectsDatabasesDocumentsRunAggregationQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  runAggregationQueryResponse?: shared.RunAggregationQueryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
