import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveLinodeIpPathParams extends SpeakeasyBase {
    address: string;
    linodeId: number;
}
export declare class RemoveLinodeIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class RemoveLinodeIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class RemoveLinodeIpRequest extends SpeakeasyBase {
    pathParams: RemoveLinodeIpPathParams;
    security: RemoveLinodeIpSecurity;
}
export declare class RemoveLinodeIpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removeLinodeIp200ApplicationJsonObject?: Map<string, any>;
    removeLinodeIpDefaultApplicationJsonObject?: RemoveLinodeIpDefaultApplicationJson;
}
