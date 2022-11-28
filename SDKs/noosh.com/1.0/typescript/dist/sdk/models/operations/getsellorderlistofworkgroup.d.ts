import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSellOrderListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetSellOrderListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetSellOrderListOfWorkgroupPathParams;
}
export declare class GetSellOrderListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderWorkgroupLevelListVo?: any;
    statusCode: number;
}
