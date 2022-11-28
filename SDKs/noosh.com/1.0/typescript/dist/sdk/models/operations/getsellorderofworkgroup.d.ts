import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSellOrderOfWorkgroupPathParams extends SpeakeasyBase {
    orderId: string;
    workgroupId: string;
}
export declare class GetSellOrderOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetSellOrderOfWorkgroupPathParams;
}
export declare class GetSellOrderOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderExpandWorkgroupLevelVo?: any;
    statusCode: number;
}
