import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintsCitationReadPathParams extends SpeakeasyBase {
    preprintId: string;
    styleId: string;
}
export declare class PreprintsCitationReadRequest extends SpeakeasyBase {
    pathParams: PreprintsCitationReadPathParams;
}
export declare class PreprintsCitationReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
