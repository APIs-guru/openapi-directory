import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User identification requires a userId, email or both
**/
export declare class UpsertUserRequestBodyIdentification extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Update properties of a user
**/
export declare class UpsertUserRequestBody extends SpeakeasyBase {
    identification: UpsertUserRequestBodyIdentification;
    properties?: Map<string, any>;
}
export declare class UpsertUser201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class UpsertUser400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class UpsertUser400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: UpsertUser400ApplicationJsonErrorsParameters;
}
export declare class UpsertUser400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser400ApplicationJson extends SpeakeasyBase {
    errors: UpsertUser400ApplicationJsonErrors;
    message: string;
    meta: UpsertUser400ApplicationJsonMeta;
}
export declare class UpsertUser401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser401ApplicationJsonMeta;
}
export declare class UpsertUser403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser403ApplicationJsonMeta;
}
export declare class UpsertUser429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser429ApplicationJsonMeta;
}
export declare class UpsertUser500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class UpsertUser500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: UpsertUser500ApplicationJsonMeta;
}
export declare class UpsertUserRequest extends SpeakeasyBase {
    request: UpsertUserRequestBody;
}
export declare class UpsertUserResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    upsertUser201ApplicationJsonObject?: UpsertUser201ApplicationJson;
    upsertUser400ApplicationJsonObject?: UpsertUser400ApplicationJson;
    upsertUser401ApplicationJsonObject?: UpsertUser401ApplicationJson;
    upsertUser403ApplicationJsonObject?: UpsertUser403ApplicationJson;
    upsertUser429ApplicationJsonObject?: UpsertUser429ApplicationJson;
    upsertUser500ApplicationJsonObject?: UpsertUser500ApplicationJson;
}
