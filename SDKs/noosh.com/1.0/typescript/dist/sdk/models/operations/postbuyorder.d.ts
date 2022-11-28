import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostBuyOrderPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostBuyOrderRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    orderPo?: any;
    orderPo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostBuyOrderRequest extends SpeakeasyBase {
    pathParams: PostBuyOrderPathParams;
    request?: PostBuyOrderRequests;
}
export declare class PostBuyOrderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    orderPo?: any;
    statusCode: number;
}
