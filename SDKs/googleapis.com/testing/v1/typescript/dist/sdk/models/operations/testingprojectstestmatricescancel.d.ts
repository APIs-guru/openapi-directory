import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestingProjectsTestMatricesCancelPathParams extends SpeakeasyBase {
    projectId: string;
    testMatrixId: string;
}
export declare class TestingProjectsTestMatricesCancelQueryParams extends SpeakeasyBase {
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
export declare class TestingProjectsTestMatricesCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingProjectsTestMatricesCancelRequest extends SpeakeasyBase {
    pathParams: TestingProjectsTestMatricesCancelPathParams;
    queryParams: TestingProjectsTestMatricesCancelQueryParams;
    security: TestingProjectsTestMatricesCancelSecurity;
}
export declare class TestingProjectsTestMatricesCancelResponse extends SpeakeasyBase {
    cancelTestMatrixResponse?: shared.CancelTestMatrixResponse;
    contentType: string;
    statusCode: number;
}
