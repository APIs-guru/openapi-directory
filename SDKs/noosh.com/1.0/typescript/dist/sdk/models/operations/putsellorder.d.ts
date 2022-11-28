import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSellOrderPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class PutSellOrderRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    orderUpdPersistVo?: any;
    orderUpdPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutSellOrderRequest extends SpeakeasyBase {
    pathParams: PutSellOrderPathParams;
    request?: PutSellOrderRequests;
}
export declare class PutSellOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderVo?: any;
    statusCode: number;
}
