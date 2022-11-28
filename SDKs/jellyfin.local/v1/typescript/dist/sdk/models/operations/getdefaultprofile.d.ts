import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDefaultProfileSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDefaultProfileRequest extends SpeakeasyBase {
    security: GetDefaultProfileSecurity;
}
export declare class GetDefaultProfileResponse extends SpeakeasyBase {
    contentType: string;
    deviceProfile?: shared.DeviceProfile;
    statusCode: number;
}
