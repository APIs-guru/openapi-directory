import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfilePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class GetProfileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetProfileRequest extends SpeakeasyBase {
    pathParams: GetProfilePathParams;
    security: GetProfileSecurity;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    deviceProfile?: shared.DeviceProfile;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
