import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBuyOrderOfWorkgroupPathParams extends SpeakeasyBase {
    orderId: string;
    workgroupId: string;
}
export declare class GetBuyOrderOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetBuyOrderOfWorkgroupPathParams;
}
export declare class GetBuyOrderOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderExpandWorkgroupLevelVo?: any;
    statusCode: number;
}
