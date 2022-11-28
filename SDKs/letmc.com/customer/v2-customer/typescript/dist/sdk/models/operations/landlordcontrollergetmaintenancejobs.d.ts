import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetMaintenanceJobsPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetMaintenanceJobsQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetMaintenanceJobsRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetMaintenanceJobsPathParams;
    queryParams: LandlordControllerGetMaintenanceJobsQueryParams;
}
export declare class LandlordControllerGetMaintenanceJobsResponse extends SpeakeasyBase {
    contentType: string;
    landlordMaintenanceModel?: shared.LandlordMaintenanceModel;
    statusCode: number;
}
