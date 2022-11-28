import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLongviewClientPathParams extends SpeakeasyBase {
    clientId: number;
}
export declare class GetLongviewClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLongviewClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLongviewClientRequest extends SpeakeasyBase {
    pathParams: GetLongviewClientPathParams;
    security: GetLongviewClientSecurity;
}
export declare class GetLongviewClientResponse extends SpeakeasyBase {
    contentType: string;
    longviewClient?: shared.LongviewClient;
    statusCode: number;
    getLongviewClientDefaultApplicationJsonObject?: GetLongviewClientDefaultApplicationJson;
}
