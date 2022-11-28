import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChatSpacesMessagesAttachmentsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ChatSpacesMessagesAttachmentsGetQueryParams extends SpeakeasyBase {
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
export declare class ChatSpacesMessagesAttachmentsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesAttachmentsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ChatSpacesMessagesAttachmentsGetSecurity extends SpeakeasyBase {
    option1?: ChatSpacesMessagesAttachmentsGetSecurityOption1;
    option2?: ChatSpacesMessagesAttachmentsGetSecurityOption2;
}
export declare class ChatSpacesMessagesAttachmentsGetRequest extends SpeakeasyBase {
    pathParams: ChatSpacesMessagesAttachmentsGetPathParams;
    queryParams: ChatSpacesMessagesAttachmentsGetQueryParams;
    security: ChatSpacesMessagesAttachmentsGetSecurity;
}
export declare class ChatSpacesMessagesAttachmentsGetResponse extends SpeakeasyBase {
    attachment?: shared.Attachment;
    contentType: string;
    statusCode: number;
}
