import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurityOption3;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams;

  @Metadata()
  security: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  fileActionResponse?: shared.FileActionResponse;

  @Metadata()
  statusCode: number;
}
