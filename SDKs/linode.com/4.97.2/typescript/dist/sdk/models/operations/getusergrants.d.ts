import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserGrantsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class GetUserGrantsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetUserGrantsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetUserGrantsRequest extends SpeakeasyBase {
    pathParams: GetUserGrantsPathParams;
    security: GetUserGrantsSecurity;
}
export declare class GetUserGrantsResponse extends SpeakeasyBase {
    contentType: string;
    grantsResponse?: shared.GrantsResponse;
    statusCode: number;
    getUserGrantsDefaultApplicationJsonObject?: GetUserGrantsDefaultApplicationJson;
}
