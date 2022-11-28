import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity extends SpeakeasyBase {
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams;
    security: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    folderActionResponse?: shared.FolderActionResponse;
    statusCode: number;
}
