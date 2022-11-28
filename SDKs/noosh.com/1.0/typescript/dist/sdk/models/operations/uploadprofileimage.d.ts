import { SpeakeasyBase } from "../../../internal/utils";
export declare class UploadProfileImagePathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class UploadProfileImageRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    applicationXYaml: Uint8Array;
    textCsv: Uint8Array;
    textXml: Uint8Array;
    textXYaml: Uint8Array;
    wildcard: Uint8Array;
    binaryString?: Uint8Array;
    binaryString1?: Uint8Array;
}
export declare class UploadProfileImageRequest extends SpeakeasyBase {
    pathParams: UploadProfileImagePathParams;
    request?: UploadProfileImageRequests;
}
export declare class UploadProfileImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    profileImageVo?: any;
    statusCode: number;
}
