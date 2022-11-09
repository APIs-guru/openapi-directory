import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageProjectsHmacKeysListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class StorageProjectsHmacKeysListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceAccountEmail" })
  serviceAccountEmail?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=showDeletedKeys" })
  showDeletedKeys?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userIp" })
  userIp?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=userProject" })
  userProject?: string;
}


export class StorageProjectsHmacKeysListSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysListSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysListSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysListSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageProjectsHmacKeysListSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageProjectsHmacKeysListSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageProjectsHmacKeysListSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageProjectsHmacKeysListSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: StorageProjectsHmacKeysListSecurityOption4;
}


export class StorageProjectsHmacKeysListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageProjectsHmacKeysListPathParams;

  @Metadata()
  queryParams: StorageProjectsHmacKeysListQueryParams;

  @Metadata()
  security: StorageProjectsHmacKeysListSecurity;
}


export class StorageProjectsHmacKeysListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  hmacKeysMetadata?: shared.HmacKeysMetadata;

  @Metadata()
  statusCode: number;
}
