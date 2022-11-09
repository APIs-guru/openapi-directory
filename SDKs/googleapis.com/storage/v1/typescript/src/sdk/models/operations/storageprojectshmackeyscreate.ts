import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageProjectsHmacKeysCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class StorageProjectsHmacKeysCreateQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceAccountEmail" })
  serviceAccountEmail: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageProjectsHmacKeysCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageProjectsHmacKeysCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageProjectsHmacKeysCreateSecurityOption2;
}


export class StorageProjectsHmacKeysCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageProjectsHmacKeysCreatePathParams;

  @Metadata()
  queryParams: StorageProjectsHmacKeysCreateQueryParams;

  @Metadata()
  security: StorageProjectsHmacKeysCreateSecurity;
}


export class StorageProjectsHmacKeysCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hmacKey?: shared.HmacKey;

  @Metadata()
  statusCode: number;
}
