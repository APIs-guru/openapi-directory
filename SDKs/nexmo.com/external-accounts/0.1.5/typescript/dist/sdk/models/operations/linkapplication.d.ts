import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LinkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class LinkApplicationPathParams extends SpeakeasyBase {
    externalId: string;
    provider: LinkApplicationProviderEnum;
}
export declare class LinkApplicationRequestBody extends SpeakeasyBase {
    application: string;
}
export declare class LinkApplicationSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class LinkApplication403ApplicationJson extends SpeakeasyBase {
    detail?: string;
    title?: string;
    type?: string;
}
export declare class LinkApplication409ApplicationJson extends SpeakeasyBase {
    detail?: string;
    title?: string;
    type?: string;
}
export declare class LinkApplicationRequest extends SpeakeasyBase {
    pathParams: LinkApplicationPathParams;
    request: LinkApplicationRequestBody;
    security: LinkApplicationSecurity;
}
export declare class LinkApplicationResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    accountResponse?: shared.AccountResponse;
    contentType: string;
    linkApplication403ApplicationJsonObject?: LinkApplication403ApplicationJson;
    linkApplication409ApplicationJsonObject?: LinkApplication409ApplicationJson;
    statusCode: number;
}
