import { SpeakeasyBase } from "../../../internal/utils";
export declare class PreprintsReadPathParams extends SpeakeasyBase {
    preprintId: string;
}
export declare class PreprintsReadRequest extends SpeakeasyBase {
    pathParams: PreprintsReadPathParams;
}
export declare class PreprintsReadResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
