import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileRequest extends SpeakeasyBase {
    security: GetProfileSecurity;
}
export declare class GetProfileResponse extends SpeakeasyBase {
    contentType: string;
    profile?: shared.Profile;
    statusCode: number;
    getProfileDefaultApplicationJsonObject?: GetProfileDefaultApplicationJson;
}
