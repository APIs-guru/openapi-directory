import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteLicenseePathParams extends SpeakeasyBase {
    key: string;
    licenseeKey: string;
}
export declare class DeleteLicenseeSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class DeleteLicenseeRequest extends SpeakeasyBase {
    pathParams: DeleteLicenseePathParams;
    security: DeleteLicenseeSecurity;
}
export declare class DeleteLicenseeResponse extends SpeakeasyBase {
    addressLookupResponseSchema?: shared.AddressLookupResponseSchema;
    contentType: string;
    deleteLicenseeResponseSchema?: shared.DeleteLicenseeResponseSchema;
    statusCode: number;
}
