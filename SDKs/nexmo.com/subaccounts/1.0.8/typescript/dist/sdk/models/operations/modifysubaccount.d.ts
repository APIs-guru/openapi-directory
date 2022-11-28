import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ModifySubaccountPathParams extends SpeakeasyBase {
    apiKey: string;
    subaccountKey: string;
}
export declare class ModifySubaccountSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ModifySubaccount401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class ModifySubaccount404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class ModifySubaccount422ApplicationJsonInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class ModifySubaccount422ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: ModifySubaccount422ApplicationJsonInvalidParameters[];
    title: string;
    type: string;
}
export declare class ModifySubaccountRequest extends SpeakeasyBase {
    pathParams: ModifySubaccountPathParams;
    request: shared.ModifySubaccountRequest;
    security: ModifySubaccountSecurity;
}
export declare class ModifySubaccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccountResponse?: any;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    modifySubaccount401ApplicationJsonObject?: ModifySubaccount401ApplicationJson;
    modifySubaccount404ApplicationJsonObject?: ModifySubaccount404ApplicationJson;
    modifySubaccount422ApplicationJsonObject?: ModifySubaccount422ApplicationJson;
}
