import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingFoldersQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetRecordingFoldersSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingFoldersRequest extends SpeakeasyBase {
    queryParams: GetRecordingFoldersQueryParams;
    security: GetRecordingFoldersSecurity;
}
export declare class GetRecordingFoldersResponse extends SpeakeasyBase {
    baseItemDtoQueryResult?: shared.BaseItemDtoQueryResult;
    contentType: string;
    statusCode: number;
}
