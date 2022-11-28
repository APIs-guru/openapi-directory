import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetCustomTaskTypesOfWgPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetCustomTaskTypesOfWgRequest extends SpeakeasyBase {
    pathParams: GetCustomTaskTypesOfWgPathParams;
}
export declare class GetCustomTaskTypesOfWgResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    taskTypeListVo?: any;
}
