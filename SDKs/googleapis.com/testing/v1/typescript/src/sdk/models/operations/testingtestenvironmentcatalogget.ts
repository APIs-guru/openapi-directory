import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TestingTestEnvironmentCatalogGetEnvironmentTypeEnum {
    EnvironmentTypeUnspecified = "ENVIRONMENT_TYPE_UNSPECIFIED"
,    Android = "ANDROID"
,    Ios = "IOS"
,    NetworkConfiguration = "NETWORK_CONFIGURATION"
,    ProvidedSoftware = "PROVIDED_SOFTWARE"
,    DeviceIpBlocks = "DEVICE_IP_BLOCKS"
}


export class TestingTestEnvironmentCatalogGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environmentType" })
  environmentType: TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
}


export class TestingTestEnvironmentCatalogGetQueryParams extends SpeakeasyBase {
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

  @Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" })
  prettyPrint?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TestingTestEnvironmentCatalogGetSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TestingTestEnvironmentCatalogGetSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TestingTestEnvironmentCatalogGetSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: TestingTestEnvironmentCatalogGetSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: TestingTestEnvironmentCatalogGetSecurityOption2;
}


export class TestingTestEnvironmentCatalogGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TestingTestEnvironmentCatalogGetPathParams;

  @Metadata()
  queryParams: TestingTestEnvironmentCatalogGetQueryParams;

  @Metadata()
  security: TestingTestEnvironmentCatalogGetSecurity;
}


export class TestingTestEnvironmentCatalogGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  testEnvironmentCatalog?: shared.TestEnvironmentCatalog;
}
