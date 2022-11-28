import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLongviewClientPathParams extends SpeakeasyBase {
    clientId: number;
}
export declare class UpdateLongviewClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateLongviewClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateLongviewClientRequest extends SpeakeasyBase {
    pathParams: UpdateLongviewClientPathParams;
    request: shared.LongviewClientInput;
    security: UpdateLongviewClientSecurity;
}
export declare class UpdateLongviewClientResponse extends SpeakeasyBase {
    contentType: string;
    longviewClient?: shared.LongviewClient;
    statusCode: number;
    updateLongviewClientDefaultApplicationJsonObject?: UpdateLongviewClientDefaultApplicationJson;
}
