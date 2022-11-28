import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostEstimatePathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostEstimateRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    estimatePo?: any;
    estimatePo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostEstimateRequest extends SpeakeasyBase {
    pathParams: PostEstimatePathParams;
    request?: PostEstimateRequests;
}
export declare class PostEstimateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    estimatePo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
