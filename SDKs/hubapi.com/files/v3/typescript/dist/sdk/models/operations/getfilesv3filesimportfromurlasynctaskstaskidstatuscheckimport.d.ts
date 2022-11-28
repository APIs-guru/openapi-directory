import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity extends SpeakeasyBase {
    privateAppsLegacy?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy?: shared.SchemeOauth2Legacy;
    hapikey?: shared.SchemeHapikey;
    privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;
    oauth2Legacy1?: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest extends SpeakeasyBase {
    pathParams: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams;
    security: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    fileActionResponse?: shared.FileActionResponse;
    statusCode: number;
}
