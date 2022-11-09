import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsCallPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCallQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsCallSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCallRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsCallPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsCallQueryParams;
    request?: shared.CallFunctionRequest;
    security: CloudfunctionsProjectsLocationsFunctionsCallSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCallResponse extends SpeakeasyBase {
    callFunctionResponse?: shared.CallFunctionResponse;
    contentType: string;
    statusCode: number;
}
