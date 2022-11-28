import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeactivationReasonListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetDeactivationReasonListRequest extends SpeakeasyBase {
    pathParams: GetDeactivationReasonListPathParams;
}
export declare class GetDeactivationReasonListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    deactivationReasonListVo?: any;
    httpStatusVo?: any;
    statusCode: number;
}
