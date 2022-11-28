import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateIpPathParams extends SpeakeasyBase {
    address: string;
}
export declare class UpdateIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateIpRequest extends SpeakeasyBase {
    pathParams: UpdateIpPathParams;
    request: shared.IpAddressInput;
    security: UpdateIpSecurity;
}
export declare class UpdateIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    updateIpDefaultApplicationJsonObject?: UpdateIpDefaultApplicationJson;
}
