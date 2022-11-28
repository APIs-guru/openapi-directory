import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesMessagesUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ChatSpacesMessagesUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    allowMissing?: boolean;
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
export declare class ChatSpacesMessagesUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesUpdateRequest extends SpeakeasyBase {
    pathParams: ChatSpacesMessagesUpdatePathParams;
    queryParams: ChatSpacesMessagesUpdateQueryParams;
    request?: shared.MessageInput;
    security: ChatSpacesMessagesUpdateSecurity;
}
export declare class ChatSpacesMessagesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
