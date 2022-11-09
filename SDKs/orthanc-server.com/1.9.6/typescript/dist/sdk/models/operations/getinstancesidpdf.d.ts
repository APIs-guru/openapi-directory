import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdPdfPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetInstancesIdPdfRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdPdfPathParams;
}
export declare class GetInstancesIdPdfResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
