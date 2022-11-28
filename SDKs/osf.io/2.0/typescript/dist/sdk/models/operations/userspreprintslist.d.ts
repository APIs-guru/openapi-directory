import { SpeakeasyBase } from "../../../internal/utils";
export declare class UsersPreprintsListPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class UsersPreprintsListRequest extends SpeakeasyBase {
    pathParams: UsersPreprintsListPathParams;
}
export declare class UsersPreprintsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
