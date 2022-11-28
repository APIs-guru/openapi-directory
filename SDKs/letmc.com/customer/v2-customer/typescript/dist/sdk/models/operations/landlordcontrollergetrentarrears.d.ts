import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetRentArrearsPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetRentArrearsQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetRentArrearsRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetRentArrearsPathParams;
    queryParams: LandlordControllerGetRentArrearsQueryParams;
}
export declare class LandlordControllerGetRentArrearsResponse extends SpeakeasyBase {
    contentType: string;
    landlordRentArrearsModel?: shared.LandlordRentArrearsModel;
    statusCode: number;
}
