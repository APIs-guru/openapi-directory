import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesMessagesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class ChatSpacesMessagesDeleteQueryParams extends SpeakeasyBase {
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
export declare class ChatSpacesMessagesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesDeleteRequest extends SpeakeasyBase {
    pathParams: ChatSpacesMessagesDeletePathParams;
    queryParams: ChatSpacesMessagesDeleteQueryParams;
    security: ChatSpacesMessagesDeleteSecurity;
}
export declare class ChatSpacesMessagesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
