import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecTemplatePathParams extends SpeakeasyBase {
    specTemplateId: string;
    workgroupId: string;
}
export declare class GetSpecTemplateRequest extends SpeakeasyBase {
    pathParams: GetSpecTemplatePathParams;
}
export declare class GetSpecTemplateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specTemplateExpandVo?: any;
    statusCode: number;
}
