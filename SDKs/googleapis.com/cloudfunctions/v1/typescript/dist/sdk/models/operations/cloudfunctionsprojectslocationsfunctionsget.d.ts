import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CloudfunctionsProjectsLocationsFunctionsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetQueryParams extends SpeakeasyBase {
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
export declare class CloudfunctionsProjectsLocationsFunctionsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetRequest extends SpeakeasyBase {
    pathParams: CloudfunctionsProjectsLocationsFunctionsGetPathParams;
    queryParams: CloudfunctionsProjectsLocationsFunctionsGetQueryParams;
    security: CloudfunctionsProjectsLocationsFunctionsGetSecurity;
}
export declare class CloudfunctionsProjectsLocationsFunctionsGetResponse extends SpeakeasyBase {
    cloudFunction?: shared.CloudFunction;
    contentType: string;
    statusCode: number;
}
