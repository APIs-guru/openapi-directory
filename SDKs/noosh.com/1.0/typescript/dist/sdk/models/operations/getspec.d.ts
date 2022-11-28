import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSpecPathParams extends SpeakeasyBase {
    projectId: string;
    specId: string;
    workgroupId: string;
}
export declare class GetSpecRequest extends SpeakeasyBase {
    pathParams: GetSpecPathParams;
}
export declare class GetSpecResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
    v1x1SpecExpandVo?: any;
}
