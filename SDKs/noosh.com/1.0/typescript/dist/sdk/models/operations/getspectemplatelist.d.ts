import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecTemplateListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetSpecTemplateListRequest extends SpeakeasyBase {
    pathParams: GetSpecTemplateListPathParams;
}
export declare class GetSpecTemplateListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    specTemplateListVo?: any;
    statusCode: number;
}
