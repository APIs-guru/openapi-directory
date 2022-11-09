import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirebasestorageProjectsBucketsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=parent" })
  parent: string;
}


export class FirebasestorageProjectsBucketsListQueryParams extends SpeakeasyBase {
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
}


export class FirebasestorageProjectsBucketsListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebasestorageProjectsBucketsListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirebasestorageProjectsBucketsListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirebasestorageProjectsBucketsListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirebasestorageProjectsBucketsListSecurityOption2;
}


export class FirebasestorageProjectsBucketsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirebasestorageProjectsBucketsListPathParams;

  @Metadata()
  queryParams: FirebasestorageProjectsBucketsListQueryParams;

  @Metadata()
  security: FirebasestorageProjectsBucketsListSecurity;
}


export class FirebasestorageProjectsBucketsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBucketsResponse?: shared.ListBucketsResponse;

  @Metadata()
  statusCode: number;
}
