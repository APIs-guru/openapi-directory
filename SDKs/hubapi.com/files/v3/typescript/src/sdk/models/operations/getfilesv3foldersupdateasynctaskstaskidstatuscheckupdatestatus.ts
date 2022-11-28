import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusPathParams;

  @SpeakeasyMetadata()
  security: GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusSecurity;
}


export class GetFilesV3FoldersUpdateAsyncTasksTaskIdStatusCheckUpdateStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderActionResponse?: shared.FolderActionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
