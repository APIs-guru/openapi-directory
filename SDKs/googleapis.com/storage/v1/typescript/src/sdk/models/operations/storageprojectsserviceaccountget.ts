import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageProjectsServiceAccountGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class StorageProjectsServiceAccountGetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageProjectsServiceAccountGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsServiceAccountGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsServiceAccountGetSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsServiceAccountGetSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsServiceAccountGetSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsServiceAccountGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageProjectsServiceAccountGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageProjectsServiceAccountGetSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageProjectsServiceAccountGetSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: StorageProjectsServiceAccountGetSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: StorageProjectsServiceAccountGetSecurityOption5;
}


export class StorageProjectsServiceAccountGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageProjectsServiceAccountGetPathParams;

  @Metadata()
  queryParams: StorageProjectsServiceAccountGetQueryParams;

  @Metadata()
  security: StorageProjectsServiceAccountGetSecurity;
}


export class StorageProjectsServiceAccountGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceAccount?: shared.ServiceAccount;

  @Metadata()
  statusCode: number;
}
