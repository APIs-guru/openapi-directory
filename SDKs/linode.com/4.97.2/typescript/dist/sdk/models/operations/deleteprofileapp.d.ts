import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProfileAppPathParams extends SpeakeasyBase {
    appId: number;
}
export declare class DeleteProfileAppSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteProfileAppDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteProfileAppRequest extends SpeakeasyBase {
    pathParams: DeleteProfileAppPathParams;
    security: DeleteProfileAppSecurity;
}
export declare class DeleteProfileAppResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteProfileApp200ApplicationJsonObject?: Map<string, any>;
    deleteProfileAppDefaultApplicationJsonObject?: DeleteProfileAppDefaultApplicationJson;
}
