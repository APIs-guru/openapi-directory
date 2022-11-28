import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDirectoryContentsQueryParams extends SpeakeasyBase {
    includeDirectories?: boolean;
    includeFiles?: boolean;
    path: string;
}
export declare class GetDirectoryContentsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetDirectoryContentsRequest extends SpeakeasyBase {
    queryParams: GetDirectoryContentsQueryParams;
    security: GetDirectoryContentsSecurity;
}
export declare class GetDirectoryContentsResponse extends SpeakeasyBase {
    contentType: string;
    fileSystemEntryInfos?: shared.FileSystemEntryInfo[];
    statusCode: number;
}
