import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutSpecPathParams extends SpeakeasyBase {
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class PutSpecRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
    v1X1SpecUpdatingPo?: any;
    v1X1SpecUpdatingPo1?: any;
}
export declare class PutSpecRequest extends SpeakeasyBase {
    pathParams: PutSpecPathParams;
    request?: PutSpecRequests;
}
export declare class PutSpecResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specHttpStatusVo?: any;
    statusCode: number;
}
