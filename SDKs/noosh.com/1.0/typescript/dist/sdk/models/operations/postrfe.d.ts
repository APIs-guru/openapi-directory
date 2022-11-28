import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostRfePathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostRfeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    rfePo?: any;
    rfePo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostRfeRequest extends SpeakeasyBase {
    pathParams: PostRfePathParams;
    request?: PostRfeRequests;
}
export declare class PostRfeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    rfqVo?: any;
    statusCode: number;
}
