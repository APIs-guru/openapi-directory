import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams extends SpeakeasyBase {
    taskId: string;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption1 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption2 extends SpeakeasyBase {
    hapikey: shared.SchemeHapikey;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption3 extends SpeakeasyBase {
    oauth2Legacy: shared.SchemeOauth2Legacy;
}
export declare class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity extends SpeakeasyBase {
    option1?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption1;
    option2?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption2;
    option3?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption3;
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
