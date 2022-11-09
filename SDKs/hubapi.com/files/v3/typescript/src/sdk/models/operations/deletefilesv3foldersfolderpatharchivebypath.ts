import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFilesV3FoldersFolderPathArchiveByPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folderPath" })
  folderPath: string;
}


export class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class DeleteFilesV3FoldersFolderPathArchiveByPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFilesV3FoldersFolderPathArchiveByPathSecurityOption2;
}


export class DeleteFilesV3FoldersFolderPathArchiveByPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFilesV3FoldersFolderPathArchiveByPathPathParams;

  @Metadata()
  security: DeleteFilesV3FoldersFolderPathArchiveByPathSecurity;
}


export class DeleteFilesV3FoldersFolderPathArchiveByPathResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
