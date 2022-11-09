import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateLicenseePathParams extends SpeakeasyBase {
    key: string;
}
export declare class UpdateLicenseeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class UpdateLicenseeRequest extends SpeakeasyBase {
    pathParams: UpdateLicenseePathParams;
    request: shared.UpdateLicenseeSchema;
    security: UpdateLicenseeSecurity;
}
export declare class UpdateLicenseeResponse extends SpeakeasyBase {
    contentType: string;
    licenseeResponseSchema?: shared.LicenseeResponseSchema;
    statusCode: number;
}
