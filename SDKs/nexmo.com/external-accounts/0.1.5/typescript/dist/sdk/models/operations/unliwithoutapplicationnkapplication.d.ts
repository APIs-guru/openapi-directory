import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UnliWithoutApplicationnkApplicationProviderEnum {
    Messenger = "messenger",
    ViberServiceMsg = "viber_service_msg",
    Whatsapp = "whatsapp"
}
export declare class UnliWithoutApplicationnkApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
    externalId: string;
    provider: UnliWithoutApplicationnkApplicationProviderEnum;
}
export declare class UnliWithoutApplicationnkApplicationSecurity extends SpeakeasyBase {
    bearerAuth?: shared.SchemeBearerAuth;
    basicAuth?: shared.SchemeBasicAuth;
}
export declare class UnliWithoutApplicationnkApplication403ApplicationJson extends SpeakeasyBase {
    detail?: string;
    title?: string;
    type?: string;
}
export declare class UnliWithoutApplicationnkApplication409ApplicationJson extends SpeakeasyBase {
    detail?: string;
    title?: string;
    type?: string;
}
export declare class UnliWithoutApplicationnkApplicationRequest extends SpeakeasyBase {
    pathParams: UnliWithoutApplicationnkApplicationPathParams;
    security: UnliWithoutApplicationnkApplicationSecurity;
}
export declare class UnliWithoutApplicationnkApplicationResponse extends SpeakeasyBase {
    fourHundredAndOneResponse?: shared.FourHundredAndOneResponse;
    contentType: string;
    statusCode: number;
    unliWithoutApplicationnkApplication403ApplicationJsonObject?: UnliWithoutApplicationnkApplication403ApplicationJson;
    unliWithoutApplicationnkApplication409ApplicationJsonObject?: UnliWithoutApplicationnkApplication409ApplicationJson;
}
