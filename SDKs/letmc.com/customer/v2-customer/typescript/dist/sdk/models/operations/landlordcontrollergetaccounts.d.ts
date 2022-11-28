import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetAccountsPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetAccountsQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetAccountsRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetAccountsPathParams;
    queryParams: LandlordControllerGetAccountsQueryParams;
}
export declare class LandlordControllerGetAccountsResponse extends SpeakeasyBase {
    contentType: string;
    landlordAccountingModel?: shared.LandlordAccountingModel;
    statusCode: number;
}
