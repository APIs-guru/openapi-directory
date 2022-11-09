import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FcmProjectsMessagesSendPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class FcmProjectsMessagesSendQueryParams extends SpeakeasyBase {
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
export declare class FcmProjectsMessagesSendSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FcmProjectsMessagesSendSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class FcmProjectsMessagesSendSecurity extends SpeakeasyBase {
    option1?: FcmProjectsMessagesSendSecurityOption1;
    option2?: FcmProjectsMessagesSendSecurityOption2;
}
export declare class FcmProjectsMessagesSendRequest extends SpeakeasyBase {
    pathParams: FcmProjectsMessagesSendPathParams;
    queryParams: FcmProjectsMessagesSendQueryParams;
    request?: shared.SendMessageRequest;
    security: FcmProjectsMessagesSendSecurity;
}
export declare class FcmProjectsMessagesSendResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
