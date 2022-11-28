import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetTrackingSnippetQueryParams extends SpeakeasyBase {
    domain: string;
}
/**
 * A snippet
**/
export declare class GetTrackingSnippet200ApplicationJsonData extends SpeakeasyBase {
    domain: string;
    snippet: string;
}
export declare class GetTrackingSnippet200ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet200ApplicationJson extends SpeakeasyBase {
    data: GetTrackingSnippet200ApplicationJsonData;
    meta: GetTrackingSnippet200ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class GetTrackingSnippet400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class GetTrackingSnippet400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: GetTrackingSnippet400ApplicationJsonErrorsParameters;
}
export declare class GetTrackingSnippet400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet400ApplicationJson extends SpeakeasyBase {
    errors: GetTrackingSnippet400ApplicationJsonErrors;
    message: string;
    meta: GetTrackingSnippet400ApplicationJsonMeta;
}
export declare class GetTrackingSnippet401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet401ApplicationJsonMeta;
}
export declare class GetTrackingSnippet403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet403ApplicationJsonMeta;
}
export declare class GetTrackingSnippet404ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet404ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet404ApplicationJsonMeta;
}
export declare class GetTrackingSnippet429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet429ApplicationJsonMeta;
}
export declare class GetTrackingSnippet500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetTrackingSnippet500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetTrackingSnippet500ApplicationJsonMeta;
}
export declare class GetTrackingSnippetRequest extends SpeakeasyBase {
    queryParams: GetTrackingSnippetQueryParams;
}
export declare class GetTrackingSnippetResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getTrackingSnippet200ApplicationJsonObject?: GetTrackingSnippet200ApplicationJson;
    getTrackingSnippet400ApplicationJsonObject?: GetTrackingSnippet400ApplicationJson;
    getTrackingSnippet401ApplicationJsonObject?: GetTrackingSnippet401ApplicationJson;
    getTrackingSnippet403ApplicationJsonObject?: GetTrackingSnippet403ApplicationJson;
    getTrackingSnippet404ApplicationJsonObject?: GetTrackingSnippet404ApplicationJson;
    getTrackingSnippet429ApplicationJsonObject?: GetTrackingSnippet429ApplicationJson;
    getTrackingSnippet500ApplicationJsonObject?: GetTrackingSnippet500ApplicationJson;
}
