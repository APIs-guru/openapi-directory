import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMediaFoldersQueryParams extends SpeakeasyBase {
    isHidden?: boolean;
}
export declare class GetMediaFoldersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetMediaFoldersRequest extends SpeakeasyBase {
    queryParams: GetMediaFoldersQueryParams;
    security: GetMediaFoldersSecurity;
}
export declare class GetMediaFoldersResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
