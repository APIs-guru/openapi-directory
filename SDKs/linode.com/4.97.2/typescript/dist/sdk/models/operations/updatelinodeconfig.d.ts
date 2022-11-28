import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLinodeConfigPathParams extends SpeakeasyBase {
    configId: number;
    linodeId: number;
}
export declare class UpdateLinodeConfigSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateLinodeConfigDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateLinodeConfigRequest extends SpeakeasyBase {
    pathParams: UpdateLinodeConfigPathParams;
    request: any;
    security: UpdateLinodeConfigSecurity;
}
export declare class UpdateLinodeConfigResponse extends SpeakeasyBase {
    contentType: string;
    linodeConfig?: shared.LinodeConfig;
    statusCode: number;
    updateLinodeConfigDefaultApplicationJsonObject?: UpdateLinodeConfigDefaultApplicationJson;
}
