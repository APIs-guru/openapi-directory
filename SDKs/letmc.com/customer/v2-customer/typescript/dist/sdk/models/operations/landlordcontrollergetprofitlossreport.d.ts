import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetProfitLossReportPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetProfitLossReportQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetProfitLossReportRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetProfitLossReportPathParams;
    queryParams: LandlordControllerGetProfitLossReportQueryParams;
}
export declare class LandlordControllerGetProfitLossReportResponse extends SpeakeasyBase {
    contentType: string;
    landlordProfitLossModel?: shared.LandlordProfitLossModel;
    statusCode: number;
}
