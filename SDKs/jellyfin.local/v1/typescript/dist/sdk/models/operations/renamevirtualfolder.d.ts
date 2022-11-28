import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RenameVirtualFolderQueryParams extends SpeakeasyBase {
    name?: string;
    newName?: string;
    refreshLibrary?: boolean;
}
export declare class RenameVirtualFolderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RenameVirtualFolderRequest extends SpeakeasyBase {
    queryParams: RenameVirtualFolderQueryParams;
    security: RenameVirtualFolderSecurity;
}
export declare class RenameVirtualFolderResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
