import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLicenseesPathParams extends SpeakeasyBase {
    key: string;
}
export declare class ListLicenseesQueryParams extends SpeakeasyBase {
    limit?: number;
    query?: string;
    startingAfter?: number;
}
export declare class ListLicenseesSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class ListLicenseesRequest extends SpeakeasyBase {
    pathParams: ListLicenseesPathParams;
    queryParams: ListLicenseesQueryParams;
    security: ListLicenseesSecurity;
}
export declare class ListLicenseesResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    licenseeListResponseSchema?: shared.LicenseeListResponseSchema;
    statusCode: number;
}
