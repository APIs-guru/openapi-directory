import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class PutWorkgroupRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
    workgroupUpdPersistVo?: any;
    workgroupUpdPersistVo1?: any;
}
export declare class PutWorkgroupRequest extends SpeakeasyBase {
    pathParams: PutWorkgroupPathParams;
    request?: PutWorkgroupRequests;
}
export declare class PutWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    workgroupHttpStatusVo?: any;
}
