import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption1 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption2 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption1;
    option2?: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption2;
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
