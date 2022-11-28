import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetProjectHomeUserFieldListOfClientPathParams extends SpeakeasyBase {
    clientWorkgroupId: string;
    workgroupId: string;
}
export declare class GetProjectHomeUserFieldListOfClientRequest extends SpeakeasyBase {
    pathParams: GetProjectHomeUserFieldListOfClientPathParams;
}
export declare class GetProjectHomeUserFieldListOfClientResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    projectHomeUserFieldsListVo?: any;
    statusCode: number;
}
