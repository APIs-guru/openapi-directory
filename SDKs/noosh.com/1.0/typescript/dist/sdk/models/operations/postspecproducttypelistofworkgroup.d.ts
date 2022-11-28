import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSpecProductTypeListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class PostSpecProductTypeListOfWorkgroupRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
    wgSpecPrdTypeRegPersistVo?: any;
    wgSpecPrdTypeRegPersistVo1?: any;
}
export declare class PostSpecProductTypeListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: PostSpecProductTypeListOfWorkgroupPathParams;
    request?: PostSpecProductTypeListOfWorkgroupRequests;
}
export declare class PostSpecProductTypeListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    wgSpecPrdTypeRegPersistVo?: any;
}
