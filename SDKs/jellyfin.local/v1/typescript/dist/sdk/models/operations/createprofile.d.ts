import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProfileRequests extends SpeakeasyBase {
    deviceProfile?: shared.DeviceProfile;
    deviceProfile1?: shared.DeviceProfile;
    deviceProfile2?: shared.DeviceProfile;
}
export declare class CreateProfileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class CreateProfileRequest extends SpeakeasyBase {
    request?: CreateProfileRequests;
    security: CreateProfileSecurity;
}
export declare class CreateProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
