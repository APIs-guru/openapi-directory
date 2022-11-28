import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetRemoteAccessRequests extends SpeakeasyBase {
    startupRemoteAccessDto?: shared.StartupRemoteAccessDto;
    startupRemoteAccessDto1?: shared.StartupRemoteAccessDto;
    startupRemoteAccessDto2?: shared.StartupRemoteAccessDto;
}
export declare class SetRemoteAccessSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SetRemoteAccessRequest extends SpeakeasyBase {
    request: SetRemoteAccessRequests;
    security: SetRemoteAccessSecurity;
}
export declare class SetRemoteAccessResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
