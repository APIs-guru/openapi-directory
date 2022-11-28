import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IamProjectsServiceAccountsPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class IamProjectsServiceAccountsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class IamProjectsServiceAccountsPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class IamProjectsServiceAccountsPatchRequest extends SpeakeasyBase {
    pathParams: IamProjectsServiceAccountsPatchPathParams;
    queryParams: IamProjectsServiceAccountsPatchQueryParams;
    request?: shared.PatchServiceAccountRequestInput;
    security: IamProjectsServiceAccountsPatchSecurity;
}
export declare class IamProjectsServiceAccountsPatchResponse extends SpeakeasyBase {
    contentType: string;
    serviceAccount?: shared.ServiceAccount;
    statusCode: number;
}
