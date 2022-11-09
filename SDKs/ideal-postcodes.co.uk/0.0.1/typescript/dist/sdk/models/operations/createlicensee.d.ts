import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateLicenseePathParams extends SpeakeasyBase {
    key: string;
}
export declare class CreateLicenseeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class CreateLicenseeRequest extends SpeakeasyBase {
    pathParams: CreateLicenseePathParams;
    request: shared.CreateLicenseeSchema;
    security: CreateLicenseeSecurity;
}
export declare class CreateLicenseeResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    licenseeResponseSchema?: shared.LicenseeResponseSchema;
    statusCode: number;
}
