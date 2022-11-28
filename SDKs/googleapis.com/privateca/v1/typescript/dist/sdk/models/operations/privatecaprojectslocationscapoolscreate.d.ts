import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivatecaProjectsLocationsCaPoolsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class PrivatecaProjectsLocationsCaPoolsCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    caPoolId?: string;
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
export declare class PrivatecaProjectsLocationsCaPoolsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class PrivatecaProjectsLocationsCaPoolsCreateRequest extends SpeakeasyBase {
    pathParams: PrivatecaProjectsLocationsCaPoolsCreatePathParams;
    queryParams: PrivatecaProjectsLocationsCaPoolsCreateQueryParams;
    request?: shared.CaPoolInput;
    security: PrivatecaProjectsLocationsCaPoolsCreateSecurity;
}
export declare class PrivatecaProjectsLocationsCaPoolsCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
