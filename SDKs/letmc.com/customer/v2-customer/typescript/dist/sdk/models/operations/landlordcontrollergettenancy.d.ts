import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetTenancyPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetTenancyQueryParams extends SpeakeasyBase {
    tenancyId: string;
    token: string;
}
export declare class LandlordControllerGetTenancyRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetTenancyPathParams;
    queryParams: LandlordControllerGetTenancyQueryParams;
}
export declare class LandlordControllerGetTenancyResponse extends SpeakeasyBase {
    contentType: string;
    landlordTenancyModel?: shared.LandlordTenancyModel;
    statusCode: number;
}
