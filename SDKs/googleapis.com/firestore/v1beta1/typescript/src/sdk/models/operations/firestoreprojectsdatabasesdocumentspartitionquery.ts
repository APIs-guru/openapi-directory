import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams extends SpeakeasyBase {
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


export class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurityOption2;
}


export class FirestoreProjectsDatabasesDocumentsPartitionQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: FirestoreProjectsDatabasesDocumentsPartitionQueryPathParams;

  @SpeakeasyMetadata()
  queryParams: FirestoreProjectsDatabasesDocumentsPartitionQueryQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.PartitionQueryRequest;

  @SpeakeasyMetadata()
  security: FirestoreProjectsDatabasesDocumentsPartitionQuerySecurity;
}


export class FirestoreProjectsDatabasesDocumentsPartitionQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partitionQueryResponse?: shared.PartitionQueryResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
