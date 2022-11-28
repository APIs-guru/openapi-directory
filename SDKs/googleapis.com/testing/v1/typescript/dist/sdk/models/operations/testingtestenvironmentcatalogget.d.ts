import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum TestingTestEnvironmentCatalogGetEnvironmentTypeEnum {
    EnvironmentTypeUnspecified = "ENVIRONMENT_TYPE_UNSPECIFIED",
    Android = "ANDROID",
    Ios = "IOS",
    NetworkConfiguration = "NETWORK_CONFIGURATION",
    ProvidedSoftware = "PROVIDED_SOFTWARE",
    DeviceIpBlocks = "DEVICE_IP_BLOCKS"
}
export declare class TestingTestEnvironmentCatalogGetPathParams extends SpeakeasyBase {
    environmentType: TestingTestEnvironmentCatalogGetEnvironmentTypeEnum;
}
export declare class TestingTestEnvironmentCatalogGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TestingTestEnvironmentCatalogGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingTestEnvironmentCatalogGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingTestEnvironmentCatalogGetSecurity extends SpeakeasyBase {
    option1?: TestingTestEnvironmentCatalogGetSecurityOption1;
    option2?: TestingTestEnvironmentCatalogGetSecurityOption2;
}
export declare class TestingTestEnvironmentCatalogGetRequest extends SpeakeasyBase {
    pathParams: TestingTestEnvironmentCatalogGetPathParams;
    queryParams: TestingTestEnvironmentCatalogGetQueryParams;
    security: TestingTestEnvironmentCatalogGetSecurity;
}
export declare class TestingTestEnvironmentCatalogGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testEnvironmentCatalog?: shared.TestEnvironmentCatalog;
}
