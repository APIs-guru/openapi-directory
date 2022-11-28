import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectHomeUserFieldsListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetProjectHomeUserFieldsListRequest extends SpeakeasyBase {
    pathParams: GetProjectHomeUserFieldsListPathParams;
}
export declare class GetProjectHomeUserFieldsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectHomeUserFieldsListVo?: any;
    statusCode: number;
}
