import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RescueLinodeInstancePathParams extends SpeakeasyBase {
    linodeId: number;
}
export declare class RescueLinodeInstanceRequestBody extends SpeakeasyBase {
    devices?: shared.RescueDevices;
}
export declare class RescueLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RescueLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RescueLinodeInstanceRequest extends SpeakeasyBase {
    pathParams: RescueLinodeInstancePathParams;
    request?: RescueLinodeInstanceRequestBody;
    security: RescueLinodeInstanceSecurity;
}
export declare class RescueLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rescueLinodeInstance200ApplicationJsonObject?: Map<string, any>;
    rescueLinodeInstanceDefaultApplicationJsonObject?: RescueLinodeInstanceDefaultApplicationJson;
}
