import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurityOption2;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams;

  @Metadata()
  security: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folderActionResponse?: shared.FolderActionResponse;

  @Metadata()
  statusCode: number;
}
