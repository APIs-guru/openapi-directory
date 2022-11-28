import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWgTaskStatusListOfWorkgroupPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetWgTaskStatusListOfWorkgroupRequest extends SpeakeasyBase {
    pathParams: GetWgTaskStatusListOfWorkgroupPathParams;
}
export declare class GetWgTaskStatusListOfWorkgroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    wgTaskStatusListVo?: any;
}
