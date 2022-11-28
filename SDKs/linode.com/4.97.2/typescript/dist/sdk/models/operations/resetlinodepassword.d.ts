import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetLinodePasswordPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class ResetLinodePasswordSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ResetLinodePasswordDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ResetLinodePasswordRequest extends SpeakeasyBase {
    pathParams: ResetLinodePasswordPathParams;
    request?: any;
    security: ResetLinodePasswordSecurity;
}
export declare class ResetLinodePasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    resetLinodePassword200ApplicationJsonObject?: Map<string, any>;
    resetLinodePasswordDefaultApplicationJsonObject?: ResetLinodePasswordDefaultApplicationJson;
}
