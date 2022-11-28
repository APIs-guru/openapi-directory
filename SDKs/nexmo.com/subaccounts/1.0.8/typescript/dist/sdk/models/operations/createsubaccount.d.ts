import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateSubAccountPathParams extends SpeakeasyBase {
    apiKey: string;
}
export declare class CreateSubAccountSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateSubAccount401ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
/**
 * Invalid API Key
**/
export declare class CreateSubAccount404ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    title: string;
    type: string;
}
export declare class CreateSubAccount422ApplicationJsonInvalidParameters extends SpeakeasyBase {
    name?: string;
    reason?: string;
}
export declare class CreateSubAccount422ApplicationJson extends SpeakeasyBase {
    detail: string;
    instance: string;
    invalidParameters: CreateSubAccount422ApplicationJsonInvalidParameters[];
    title: string;
    type: string;
}
export declare class CreateSubAccountRequest extends SpeakeasyBase {
    pathParams: CreateSubAccountPathParams;
    request: shared.NewSubaccountRequest;
    security: CreateSubAccountSecurity;
}
export declare class CreateSubAccountResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    subaccountCreateResponse?: shared.SubaccountCreateResponse;
    unprovisionedErrorResponse?: shared.UnprovisionedErrorResponse;
    createSubAccount401ApplicationJsonObject?: CreateSubAccount401ApplicationJson;
    createSubAccount404ApplicationJsonObject?: CreateSubAccount404ApplicationJson;
    createSubAccount422ApplicationJsonObject?: CreateSubAccount422ApplicationJson;
}
