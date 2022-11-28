import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LandlordControllerGetLandlordCrmEntriesPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class LandlordControllerGetLandlordCrmEntriesQueryParams extends SpeakeasyBase {
    token: string;
}
export declare class LandlordControllerGetLandlordCrmEntriesRequest extends SpeakeasyBase {
    pathParams: LandlordControllerGetLandlordCrmEntriesPathParams;
    queryParams: LandlordControllerGetLandlordCrmEntriesQueryParams;
}
export declare class LandlordControllerGetLandlordCrmEntriesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    landlordCrmEntries?: shared.LandlordCrmEntry[];
    statusCode: number;
}
