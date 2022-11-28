import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AllocateIpSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AllocateIpDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AllocateIpRequest extends SpeakeasyBase {
    request: any;
    security: AllocateIpSecurity;
}
export declare class AllocateIpResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
    allocateIpDefaultApplicationJsonObject?: AllocateIpDefaultApplicationJson;
}
