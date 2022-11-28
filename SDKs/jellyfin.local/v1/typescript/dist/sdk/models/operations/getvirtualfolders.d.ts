import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVirtualFoldersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetVirtualFoldersRequest extends SpeakeasyBase {
    security: GetVirtualFoldersSecurity;
}
export declare class GetVirtualFoldersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualFolderInfos?: shared.VirtualFolderInfo[];
}
