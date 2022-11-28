import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateUserGrantsPathParams extends SpeakeasyBase {
    username: string;
}
export declare class UpdateUserGrantsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateUserGrantsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateUserGrantsRequest extends SpeakeasyBase {
    pathParams: UpdateUserGrantsPathParams;
    request: shared.GrantsResponseInput;
    security: UpdateUserGrantsSecurity;
}
export declare class UpdateUserGrantsResponse extends SpeakeasyBase {
    contentType: string;
    grantsResponse?: shared.GrantsResponse;
    statusCode: number;
    updateUserGrantsDefaultApplicationJsonObject?: UpdateUserGrantsDefaultApplicationJson;
}
