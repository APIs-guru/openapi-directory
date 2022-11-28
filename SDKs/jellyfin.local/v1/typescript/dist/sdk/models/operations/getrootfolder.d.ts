import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRootFolderPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetRootFolderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRootFolderRequest extends SpeakeasyBase {
    pathParams: GetRootFolderPathParams;
    security: GetRootFolderSecurity;
}
export declare class GetRootFolderResponse extends SpeakeasyBase {
    baseItemDto?: shared.BaseItemDto;
    contentType: string;
    statusCode: number;
}
