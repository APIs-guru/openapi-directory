import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User identification requires a userId, email or both
**/
export declare class LinkRequestBodyIdentification extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Link web activity to user
**/
export declare class LinkRequestBody extends SpeakeasyBase {
    deviceId: string;
    identification: LinkRequestBodyIdentification;
}
export declare class Link201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: Link201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class Link400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class Link400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: Link400ApplicationJsonErrorsParameters;
}
export declare class Link400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link400ApplicationJson extends SpeakeasyBase {
    errors: Link400ApplicationJsonErrors;
    message: string;
    meta: Link400ApplicationJsonMeta;
}
export declare class Link401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: Link401ApplicationJsonMeta;
}
export declare class Link403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: Link403ApplicationJsonMeta;
}
export declare class Link429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: Link429ApplicationJsonMeta;
}
export declare class Link500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class Link500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: Link500ApplicationJsonMeta;
}
export declare class LinkRequest extends SpeakeasyBase {
    request: LinkRequestBody;
}
export declare class LinkResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    link201ApplicationJsonObject?: Link201ApplicationJson;
    link400ApplicationJsonObject?: Link400ApplicationJson;
    link401ApplicationJsonObject?: Link401ApplicationJson;
    link403ApplicationJsonObject?: Link403ApplicationJson;
    link429ApplicationJsonObject?: Link429ApplicationJson;
    link500ApplicationJsonObject?: Link500ApplicationJson;
}
