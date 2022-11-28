import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetIpPathParams extends SpeakeasyBase {
    address: string;
}
export declare class GetIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetIpRequest extends SpeakeasyBase {
    pathParams: GetIpPathParams;
    security: GetIpSecurity;
}
export declare class GetIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    getIpDefaultApplicationJsonObject?: GetIpDefaultApplicationJson;
}
