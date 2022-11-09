import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostToolsLookupRequest extends SpeakeasyBase {
    request?: Uint8Array;
}
export declare class PostToolsLookupResponse extends SpeakeasyBase {
    contentType: string;
    postToolsLookup200ApplicationJsonAny?: any;
    statusCode: number;
}
