import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeConfigPathParams extends SpeakeasyBase {
    configId: number;
    linodeId: number;
}
export declare class GetLinodeConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeConfigRequest extends SpeakeasyBase {
    pathParams: GetLinodeConfigPathParams;
    security: GetLinodeConfigSecurity;
}
export declare class GetLinodeConfigResponse extends SpeakeasyBase {
    contentType: string;
    linodeConfig?: shared.LinodeConfig;
    statusCode: number;
    getLinodeConfigDefaultApplicationJsonObject?: GetLinodeConfigDefaultApplicationJson;
}
