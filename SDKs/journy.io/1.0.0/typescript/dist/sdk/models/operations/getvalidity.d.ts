import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Validation of API Key
**/
export declare class GetValidity200ApplicationJsonData extends SpeakeasyBase {
    permissions: string[];
}
export declare class GetValidity200ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetValidity200ApplicationJson extends SpeakeasyBase {
    data: GetValidity200ApplicationJsonData;
    meta: GetValidity200ApplicationJsonMeta;
}
export declare class GetValidity401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetValidity401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity401ApplicationJsonMeta;
}
export declare class GetValidity403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetValidity403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity403ApplicationJsonMeta;
}
export declare class GetValidity429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetValidity429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity429ApplicationJsonMeta;
}
export declare class GetValidity500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class GetValidity500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: GetValidity500ApplicationJsonMeta;
}
export declare class GetValidityResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getValidity200ApplicationJsonObject?: GetValidity200ApplicationJson;
    getValidity401ApplicationJsonObject?: GetValidity401ApplicationJson;
    getValidity403ApplicationJsonObject?: GetValidity403ApplicationJson;
    getValidity429ApplicationJsonObject?: GetValidity429ApplicationJson;
    getValidity500ApplicationJsonObject?: GetValidity500ApplicationJson;
}
