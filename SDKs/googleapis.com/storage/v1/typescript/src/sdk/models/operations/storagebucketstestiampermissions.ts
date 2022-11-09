import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StorageBucketsTestIamPermissionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;
}


export class StorageBucketsTestIamPermissionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=alt" })
  alt?: shared.AltEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=fields" })
  fields?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=key" })
  key?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" })
  oauthToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=permissions" })
  permissions: string[];

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


export class StorageBucketsTestIamPermissionsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsTestIamPermissionsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsTestIamPermissionsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsTestIamPermissionsSecurityOption4 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsTestIamPermissionsSecurityOption5 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class StorageBucketsTestIamPermissionsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: StorageBucketsTestIamPermissionsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: StorageBucketsTestIamPermissionsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: StorageBucketsTestIamPermissionsSecurityOption3;

  @Metadata({ data: "security, option=true" })
  option4?: StorageBucketsTestIamPermissionsSecurityOption4;

  @Metadata({ data: "security, option=true" })
  option5?: StorageBucketsTestIamPermissionsSecurityOption5;
}


export class StorageBucketsTestIamPermissionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StorageBucketsTestIamPermissionsPathParams;

  @Metadata()
  queryParams: StorageBucketsTestIamPermissionsQueryParams;

  @Metadata()
  security: StorageBucketsTestIamPermissionsSecurity;
}


export class StorageBucketsTestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  testIamPermissionsResponse?: shared.TestIamPermissionsResponse;
}
