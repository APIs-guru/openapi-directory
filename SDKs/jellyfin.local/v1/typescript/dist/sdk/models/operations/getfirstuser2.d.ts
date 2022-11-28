import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFirstUser2Security extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetFirstUser2Request extends SpeakeasyBase {
    security: GetFirstUser2Security;
}
export declare class GetFirstUser2Response extends SpeakeasyBase {
    contentType: string;
    startupUserDto?: shared.StartupUserDto;
    statusCode: number;
}
