import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurityOption2;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams;

  @Metadata()
  security: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
