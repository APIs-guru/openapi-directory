import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLinodeConfigPathParams extends SpeakeasyBase {
    configId: number;
    linodeId: number;
}
export declare class DeleteLinodeConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLinodeConfigRequest extends SpeakeasyBase {
    pathParams: DeleteLinodeConfigPathParams;
    security: DeleteLinodeConfigSecurity;
}
export declare class DeleteLinodeConfigResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLinodeConfig200ApplicationJsonObject?: Map<string, any>;
    deleteLinodeConfigDefaultApplicationJsonObject?: DeleteLinodeConfigDefaultApplicationJson;
}
