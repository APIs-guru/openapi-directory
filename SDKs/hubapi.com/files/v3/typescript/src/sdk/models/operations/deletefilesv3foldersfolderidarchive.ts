import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFilesV3FoldersFolderIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folderId" })
  folderId: string;
}


export class DeleteFilesV3FoldersFolderIdArchiveSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class DeleteFilesV3FoldersFolderIdArchiveSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class DeleteFilesV3FoldersFolderIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFilesV3FoldersFolderIdArchiveSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFilesV3FoldersFolderIdArchiveSecurityOption2;
}


export class DeleteFilesV3FoldersFolderIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFilesV3FoldersFolderIdArchivePathParams;

  @Metadata()
  security: DeleteFilesV3FoldersFolderIdArchiveSecurity;
}


export class DeleteFilesV3FoldersFolderIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
