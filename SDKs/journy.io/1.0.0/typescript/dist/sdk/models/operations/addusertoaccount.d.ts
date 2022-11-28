import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddUserToAccountPathParams extends SpeakeasyBase {
    accountId: string;
}
/**
 * The user being added/removed from the account
**/
export declare class AddUserToAccountRequestBody extends SpeakeasyBase {
    userId: string;
}
export declare class AddUserToAccount201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class AddUserToAccount201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class AddUserToAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class AddUserToAccount400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: AddUserToAccount400ApplicationJsonErrorsParameters;
}
export declare class AddUserToAccount400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class AddUserToAccount400ApplicationJson extends SpeakeasyBase {
    errors: AddUserToAccount400ApplicationJsonErrors;
    message: string;
    meta: AddUserToAccount400ApplicationJsonMeta;
}
export declare class AddUserToAccount401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class AddUserToAccount401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount401ApplicationJsonMeta;
}
export declare class AddUserToAccount429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class AddUserToAccount429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount429ApplicationJsonMeta;
}
export declare class AddUserToAccount500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class AddUserToAccount500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: AddUserToAccount500ApplicationJsonMeta;
}
export declare class AddUserToAccountRequest extends SpeakeasyBase {
    pathParams: AddUserToAccountPathParams;
    request: AddUserToAccountRequestBody;
}
export declare class AddUserToAccountResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    addUserToAccount201ApplicationJsonObject?: AddUserToAccount201ApplicationJson;
    addUserToAccount400ApplicationJsonObject?: AddUserToAccount400ApplicationJson;
    addUserToAccount401ApplicationJsonObject?: AddUserToAccount401ApplicationJson;
    addUserToAccount429ApplicationJsonObject?: AddUserToAccount429ApplicationJson;
    addUserToAccount500ApplicationJsonObject?: AddUserToAccount500ApplicationJson;
}
