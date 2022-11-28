import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVirtualFolderQueryParams extends SpeakeasyBase {
    collectionType?: string;
    name?: string;
    paths?: string[];
    refreshLibrary?: boolean;
}
export declare class AddVirtualFolderRequests extends SpeakeasyBase {
    addVirtualFolderDto?: shared.AddVirtualFolderDto;
    addVirtualFolderDto1?: shared.AddVirtualFolderDto;
    addVirtualFolderDto2?: shared.AddVirtualFolderDto;
}
export declare class AddVirtualFolderSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class AddVirtualFolderRequest extends SpeakeasyBase {
    queryParams: AddVirtualFolderQueryParams;
    request?: AddVirtualFolderRequests;
    security: AddVirtualFolderSecurity;
}
export declare class AddVirtualFolderResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
