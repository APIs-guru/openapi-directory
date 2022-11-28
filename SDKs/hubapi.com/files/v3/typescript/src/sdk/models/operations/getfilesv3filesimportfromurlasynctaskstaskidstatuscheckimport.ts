import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=taskId" })
  taskId: string;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy1?: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportPathParams;

  @SpeakeasyMetadata()
  security: GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportSecurity;
}


export class GetFilesV3FilesImportFromUrlAsyncTasksTaskIdStatusCheckImportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  fileActionResponse?: shared.FileActionResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
