import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLkeVersionPathParams extends SpeakeasyBase {
    version: string;
}
export declare class GetLkeVersionSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLkeVersionDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLkeVersionRequest extends SpeakeasyBase {
    pathParams: GetLkeVersionPathParams;
    security: GetLkeVersionSecurity;
}
export declare class GetLkeVersionResponse extends SpeakeasyBase {
    contentType: string;
    lkeVersion?: shared.LkeVersion;
    statusCode: number;
    getLkeVersionDefaultApplicationJsonObject?: GetLkeVersionDefaultApplicationJson;
}
