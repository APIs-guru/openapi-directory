import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsDeleteRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsDeletePathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsDeleteQueryParams;
    security: CloudfunctionsProjectsLocationsFunctionsDeleteSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
