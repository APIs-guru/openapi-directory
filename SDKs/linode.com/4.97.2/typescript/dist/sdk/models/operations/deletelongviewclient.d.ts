import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLongviewClientPathParams extends SpeakeasyBase {
    clientId: number;
}
export declare class DeleteLongviewClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLongviewClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLongviewClientRequest extends SpeakeasyBase {
    pathParams: DeleteLongviewClientPathParams;
    security: DeleteLongviewClientSecurity;
}
export declare class DeleteLongviewClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLongviewClient200ApplicationJsonObject?: Map<string, any>;
    deleteLongviewClientDefaultApplicationJsonObject?: DeleteLongviewClientDefaultApplicationJson;
}
