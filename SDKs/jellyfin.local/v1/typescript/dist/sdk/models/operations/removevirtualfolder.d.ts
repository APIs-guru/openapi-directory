import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveVirtualFolderQueryParams extends SpeakeasyBase {
    name?: string;
    refreshLibrary?: boolean;
}
export declare class RemoveVirtualFolderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class RemoveVirtualFolderRequest extends SpeakeasyBase {
    queryParams: RemoveVirtualFolderQueryParams;
    security: RemoveVirtualFolderSecurity;
}
export declare class RemoveVirtualFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
