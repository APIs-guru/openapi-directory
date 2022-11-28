import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileGrantsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileGrantsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileGrantsRequest extends SpeakeasyBase {
    security: GetProfileGrantsSecurity;
}
export declare class GetProfileGrantsResponse extends SpeakeasyBase {
    contentType: string;
    grantsResponse?: shared.GrantsResponse;
    statusCode: number;
    getProfileGrantsDefaultApplicationJsonObject?: GetProfileGrantsDefaultApplicationJson;
}
