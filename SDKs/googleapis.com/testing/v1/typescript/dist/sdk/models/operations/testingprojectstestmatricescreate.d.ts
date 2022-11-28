import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestingProjectsTestMatricesCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class TestingProjectsTestMatricesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TestingProjectsTestMatricesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingProjectsTestMatricesCreateRequest extends SpeakeasyBase {
    pathParams: TestingProjectsTestMatricesCreatePathParams;
    queryParams: TestingProjectsTestMatricesCreateQueryParams;
    request?: shared.TestMatrix;
    security: TestingProjectsTestMatricesCreateSecurity;
}
export declare class TestingProjectsTestMatricesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    testMatrix?: shared.TestMatrix;
}
