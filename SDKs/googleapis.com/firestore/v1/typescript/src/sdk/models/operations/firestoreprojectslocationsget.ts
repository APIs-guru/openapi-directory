import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FirestoreProjectsLocationsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name" })
  name: string;
}


export class FirestoreProjectsLocationsGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=mask.fieldPaths" })
  maskFieldPaths?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=readTime" })
  readTime?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transaction" })
  transaction?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class FirestoreProjectsLocationsGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsLocationsGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class FirestoreProjectsLocationsGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: FirestoreProjectsLocationsGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: FirestoreProjectsLocationsGetSecurityOption2;
}


export class FirestoreProjectsLocationsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FirestoreProjectsLocationsGetPathParams;

  @Metadata()
  queryParams: FirestoreProjectsLocationsGetQueryParams;

  @Metadata()
  security: FirestoreProjectsLocationsGetSecurity;
}


export class FirestoreProjectsLocationsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  location?: shared.Location;

  @Metadata()
  statusCode: number;
}
