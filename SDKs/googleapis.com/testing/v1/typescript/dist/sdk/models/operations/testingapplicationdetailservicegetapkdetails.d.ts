import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestingApplicationDetailServiceGetApkDetailsQueryParams extends SpeakeasyBase {
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
export declare class TestingApplicationDetailServiceGetApkDetailsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TestingApplicationDetailServiceGetApkDetailsRequest extends SpeakeasyBase {
    queryParams: TestingApplicationDetailServiceGetApkDetailsQueryParams;
    request?: shared.FileReference;
    security: TestingApplicationDetailServiceGetApkDetailsSecurity;
}
export declare class TestingApplicationDetailServiceGetApkDetailsResponse extends SpeakeasyBase {
    contentType: string;
    getApkDetailsResponse?: shared.GetApkDetailsResponse;
    statusCode: number;
}
