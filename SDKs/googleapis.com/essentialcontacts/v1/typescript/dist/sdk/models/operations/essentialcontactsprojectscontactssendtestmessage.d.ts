import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsSendTestMessagePathParams extends SpeakeasyBase {
    resource: string;
}
export declare class EssentialcontactsProjectsContactsSendTestMessageQueryParams extends SpeakeasyBase {
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
export declare class EssentialcontactsProjectsContactsSendTestMessageSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsSendTestMessageRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsSendTestMessagePathParams;
    queryParams: EssentialcontactsProjectsContactsSendTestMessageQueryParams;
    request?: shared.GoogleCloudEssentialcontactsV1SendTestMessageRequest;
    security: EssentialcontactsProjectsContactsSendTestMessageSecurity;
}
export declare class EssentialcontactsProjectsContactsSendTestMessageResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
