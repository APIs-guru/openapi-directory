import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPlanIdPathParams extends SpeakeasyBase {
    planId: string;
}
export declare class GetPlanIdQueryParams extends SpeakeasyBase {
    locationId?: string;
}
export declare class GetPlanIdRequest extends SpeakeasyBase {
    pathParams: GetPlanIdPathParams;
    queryParams: GetPlanIdQueryParams;
}
export declare class GetPlanIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
