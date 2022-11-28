import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TravelimpactmodelFlightsComputeFlightEmissionsQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TravelimpactmodelFlightsComputeFlightEmissionsRequest extends SpeakeasyBase {
    queryParams: TravelimpactmodelFlightsComputeFlightEmissionsQueryParams;
    request?: shared.ComputeFlightEmissionsRequest;
}
export declare class TravelimpactmodelFlightsComputeFlightEmissionsResponse extends SpeakeasyBase {
    computeFlightEmissionsResponse?: shared.ComputeFlightEmissionsResponse;
    contentType: string;
    statusCode: number;
}
