import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    functionId?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCreateRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsCreatePathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsCreateQueryParams;
    request?: shared.FunctionInput;
    security: CloudfunctionsProjectsLocationsFunctionsCreateSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
