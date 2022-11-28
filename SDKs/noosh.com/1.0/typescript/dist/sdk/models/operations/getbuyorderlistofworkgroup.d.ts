import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBuyOrderListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetBuyOrderListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetBuyOrderListOfWorkgroupPathParams;
}
export declare class GetBuyOrderListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderWorkgroupLevelListVo?: any;
    statusCode: number;
}
