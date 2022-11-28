import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfilePathParams extends SpeakeasyBase {
    profileId: string;
}
export declare class UpdateProfileRequests extends SpeakeasyBase {
    deviceProfile?: shared.DeviceProfile;
    deviceProfile1?: shared.DeviceProfile;
    deviceProfile2?: shared.DeviceProfile;
}
export declare class UpdateProfileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    pathParams: UpdateProfilePathParams;
    request?: UpdateProfileRequests;
    security: UpdateProfileSecurity;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
