import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum TestingTestEnvironmentCatalogGetEnvironmentTypeEnum {
    EnvironmentTypeUnspecified = "ENVIRONMENT_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    NetworkConfiguration = "NETWORK_CONFIGURATION",
    ProvidedSoftware = "PROVIDED_SOFTWARE",
    DeviceIpBlocks = "DEVICE_IP_BLOCKS"
}


export class TestingTestEnvironmentCatalogGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environmentType" })
  environmentType: TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
}


export class TestingTestEnvironmentCatalogGetQueryParams extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" })
  quotaUser?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" })
  uploadType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" })
  uploadProtocol?: string;
}


export class TestingTestEnvironmentCatalogGetSecurityOption1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TestingTestEnvironmentCatalogGetSecurityOption2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2c: shared.SchemeOauth2c;
}


export class TestingTestEnvironmentCatalogGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, option=true" })
  option1?: TestingTestEnvironmentCatalogGetSecurityOption1;

  @SpeakeasyMetadata({ data: "security, option=true" })
  option2?: TestingTestEnvironmentCatalogGetSecurityOption2;
}


export class TestingTestEnvironmentCatalogGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TestingTestEnvironmentCatalogGetPathParams;

  @SpeakeasyMetadata()
  queryParams: TestingTestEnvironmentCatalogGetQueryParams;

  @SpeakeasyMetadata()
  security: TestingTestEnvironmentCatalogGetSecurity;
}


export class TestingTestEnvironmentCatalogGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testEnvironmentCatalog?: shared.TestEnvironmentCatalog;
}
