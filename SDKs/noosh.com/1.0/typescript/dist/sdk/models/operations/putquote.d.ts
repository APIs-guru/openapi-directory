import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutQuotePathParams extends SpeakeasyBase {
    projectId: string;
    quoteId: string;
    workgroupId: string;
}
export declare class PutQuoteRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    quotePutPersistVo?: any;
    quotePutPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PutQuoteRequest extends SpeakeasyBase {
    pathParams: PutQuotePathParams;
    request?: PutQuoteRequests;
}
export declare class PutQuoteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
