import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteClientPathParams extends SpeakeasyBase {
    clientId: string;
}
export declare class DeleteClientSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteClientDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteClientRequest extends SpeakeasyBase {
    pathParams: DeleteClientPathParams;
    security: DeleteClientSecurity;
}
export declare class DeleteClientResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteClient200ApplicationJsonObject?: Map<string, any>;
    deleteClientDefaultApplicationJsonObject?: DeleteClientDefaultApplicationJson;
}
