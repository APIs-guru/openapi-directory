import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLinodeConfigPathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class AddLinodeConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AddLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AddLinodeConfigRequest extends SpeakeasyBase {
    pathParams: AddLinodeConfigPathParams;
    request: shared.LinodeConfigInput;
    security: AddLinodeConfigSecurity;
}
export declare class AddLinodeConfigResponse extends SpeakeasyBase {
    contentType: string;
    linodeConfig?: shared.LinodeConfig;
    statusCode: number;
    addLinodeConfigDefaultApplicationJsonObject?: AddLinodeConfigDefaultApplicationJson;
}
