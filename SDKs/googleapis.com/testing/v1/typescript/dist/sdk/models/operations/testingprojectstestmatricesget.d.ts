import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestingProjectsTestMatricesGetPathParams extends SpeakeasyBase {
    projectId: string;
    testMatrixId: string;
}
export declare class TestingProjectsTestMatricesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TestingProjectsTestMatricesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingProjectsTestMatricesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingProjectsTestMatricesGetSecurity extends SpeakeasyBase {
    option1?: TestingProjectsTestMatricesGetSecurityOption1;
    option2?: TestingProjectsTestMatricesGetSecurityOption2;
}
export declare class TestingProjectsTestMatricesGetRequest extends SpeakeasyBase {
    pathParams: TestingProjectsTestMatricesGetPathParams;
    queryParams: TestingProjectsTestMatricesGetQueryParams;
    security: TestingProjectsTestMatricesGetSecurity;
}
export declare class TestingProjectsTestMatricesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testMatrix?: shared.TestMatrix;
}
