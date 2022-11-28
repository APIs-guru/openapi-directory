import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveUserFromAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * The user being added/removed from the account
**/
export declare class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
    userId: string;
}
export declare class RemoveUserFromAccount201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class RemoveUserFromAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class RemoveUserFromAccount400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}
export declare class RemoveUserFromAccount400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount400ApplicationJson extends SpeakeasyBase {
    errors: RemoveUserFromAccount400ApplicationJsonErrors;
    message: string;
    meta: RemoveUserFromAccount400ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount401ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount403ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount429ApplicationJsonMeta;
}
export declare class RemoveUserFromAccount500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class RemoveUserFromAccount500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: RemoveUserFromAccount500ApplicationJsonMeta;
}
export declare class RemoveUserFromAccountRequest extends SpeakeasyBase {
    pathParams: RemoveUserFromAccountPathParams;
    request: RemoveUserFromAccountRequestBody;
}
export declare class RemoveUserFromAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    removeUserFromAccount201ApplicationJsonObject?: RemoveUserFromAccount201ApplicationJson;
    removeUserFromAccount400ApplicationJsonObject?: RemoveUserFromAccount400ApplicationJson;
    removeUserFromAccount401ApplicationJsonObject?: RemoveUserFromAccount401ApplicationJson;
    removeUserFromAccount403ApplicationJsonObject?: RemoveUserFromAccount403ApplicationJson;
    removeUserFromAccount429ApplicationJsonObject?: RemoveUserFromAccount429ApplicationJson;
    removeUserFromAccount500ApplicationJsonObject?: RemoveUserFromAccount500ApplicationJson;
}
