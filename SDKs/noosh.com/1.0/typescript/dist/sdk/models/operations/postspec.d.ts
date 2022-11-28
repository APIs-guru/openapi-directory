import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSpecPathParams extends SpeakeasyBase {
    projectId: string;
    workgroupId: string;
}
export declare class PostSpecRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    specPersistVo?: any;
    specPersistVo1?: any;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
}
export declare class PostSpecRequest extends SpeakeasyBase {
    pathParams: PostSpecPathParams;
    request?: PostSpecRequests;
}
export declare class PostSpecResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specVo?: any;
    statusCode: number;
}
