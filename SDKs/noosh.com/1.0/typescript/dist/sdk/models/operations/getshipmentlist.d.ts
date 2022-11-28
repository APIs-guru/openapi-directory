import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetShipmentListPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class GetShipmentListRequest extends SpeakeasyBase {
    pathParams: GetShipmentListPathParams;
}
export declare class GetShipmentListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    shipmentListVo?: any;
    statusCode: number;
}
