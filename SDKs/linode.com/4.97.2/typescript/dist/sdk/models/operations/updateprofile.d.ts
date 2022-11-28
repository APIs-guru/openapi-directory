import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateProfileSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateProfileDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateProfileRequest extends SpeakeasyBase {
    request: shared.ProfileInput;
    security: UpdateProfileSecurity;
}
export declare class UpdateProfileResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
    updateProfileDefaultApplicationJsonObject?: UpdateProfileDefaultApplicationJson;
}
