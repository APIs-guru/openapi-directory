import { SpeakeasyBase } from "../../../internal/utils";
export declare class CitationsStylesReadPathParams extends SpeakeasyBase {
    styleId: string;
}
export declare class CitationsStylesReadRequest extends SpeakeasyBase {
    pathParams: CitationsStylesReadPathParams;
}
export declare class CitationsStylesReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
