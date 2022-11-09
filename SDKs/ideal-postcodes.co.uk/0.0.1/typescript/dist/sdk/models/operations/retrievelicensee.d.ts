import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RetrieveLicenseePathParams extends SpeakeasyBase {
    key: string;
    licenseeKey: string;
}
export declare class RetrieveLicenseeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class RetrieveLicenseeRequest extends SpeakeasyBase {
    pathParams: RetrieveLicenseePathParams;
    security: RetrieveLicenseeSecurity;
}
export declare class RetrieveLicenseeResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    licenseeResponseSchema?: shared.LicenseeResponseSchema;
    statusCode: number;
}
