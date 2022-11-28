import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetShipmentPathParams extends SpeakeasyBase {
    projectId: string;
    shipmentId: string;
    workgroupId: string;
}
export declare class GetShipmentRequest extends SpeakeasyBase {
    pathParams: GetShipmentPathParams;
}
export declare class GetShipmentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    shipmentExpandVo?: any;
    statusCode: number;
}
