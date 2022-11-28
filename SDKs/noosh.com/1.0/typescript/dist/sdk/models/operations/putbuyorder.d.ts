import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutBuyOrderPathParams extends SpeakeasyBase {
    orderId: string;
    projectId: string;
    workgroupId: string;
}
export declare class PutBuyOrderRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    orderUpdPersistVo?: any;
    orderUpdPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutBuyOrderRequest extends SpeakeasyBase {
    pathParams: PutBuyOrderPathParams;
    request?: PutBuyOrderRequests;
}
export declare class PutBuyOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderVo?: any;
    statusCode: number;
}
