import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDefaultDirectoryBrowserSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDefaultDirectoryBrowserRequest extends SpeakeasyBase {
    security: GetDefaultDirectoryBrowserSecurity;
}
export declare class GetDefaultDirectoryBrowserResponse extends SpeakeasyBase {
    contentType: string;
    defaultDirectoryBrowserInfoDto?: shared.DefaultDirectoryBrowserInfoDto;
    statusCode: number;
}
