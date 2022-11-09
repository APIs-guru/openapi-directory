import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFilesV3FilesFileIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DeleteFilesV3FilesFileIdArchiveSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class DeleteFilesV3FilesFileIdArchiveSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class DeleteFilesV3FilesFileIdArchiveSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFilesV3FilesFileIdArchiveSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFilesV3FilesFileIdArchiveSecurityOption2;
}


export class DeleteFilesV3FilesFileIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFilesV3FilesFileIdArchivePathParams;

  @Metadata()
  security: DeleteFilesV3FilesFileIdArchiveSecurity;
}


export class DeleteFilesV3FilesFileIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
