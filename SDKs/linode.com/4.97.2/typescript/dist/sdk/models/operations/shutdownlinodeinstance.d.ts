import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ShutdownLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class ShutdownLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class ShutdownLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class ShutdownLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: ShutdownLinodeInstancePathParams;
    security: ShutdownLinodeInstanceSecurity;
}
export declare class ShutdownLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    shutdownLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    shutdownLinodeInstanceDefaultApplicationJsonObject?: ShutdownLinodeInstanceDefaultApplicationJson;
}
