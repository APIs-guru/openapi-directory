import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetSummaryDetailsPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetSummaryDetailsQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetSummaryDetailsRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetSummaryDetailsPathParams;
    queryParams: LandlordControllerGetSummaryDetailsQueryParams;
}
export declare class LandlordControllerGetSummaryDetailsResponse extends SpeakeasyBase {
    contentType: string;
    landlordSummaryModel?: shared.LandlordSummaryModel;
    statusCode: number;
}
