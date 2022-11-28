import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BootLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class BootLinodeInstanceRequestBody extends SpeakeasyBase {
    configId?: number;
}
export declare class BootLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class BootLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class BootLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: BootLinodeInstancePathParams;
    request?: BootLinodeInstanceRequestBody;
    security: BootLinodeInstanceSecurity;
}
export declare class BootLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    bootLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    bootLinodeInstanceDefaultApplicationJsonObject?: BootLinodeInstanceDefaultApplicationJson;
}
