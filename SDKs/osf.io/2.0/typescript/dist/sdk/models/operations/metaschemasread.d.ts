import { SpeakeasyBase } from "../../../internal/utils";
export declare class MetaschemasReadPathParams extends SpeakeasyBase {
    metaschemaId: string;
}
export declare class MetaschemasReadRequest extends SpeakeasyBase {
    pathParams: MetaschemasReadPathParams;
}
export declare class MetaschemasReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
