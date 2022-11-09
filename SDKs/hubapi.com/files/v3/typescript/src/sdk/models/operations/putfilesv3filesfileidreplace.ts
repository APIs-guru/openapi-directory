import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutFilesV3FilesFileIdReplacePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class PutFilesV3FilesFileIdReplaceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PutFilesV3FilesFileIdReplaceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PutFilesV3FilesFileIdReplaceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutFilesV3FilesFileIdReplaceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutFilesV3FilesFileIdReplaceSecurityOption2;
}


export class PutFilesV3FilesFileIdReplaceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutFilesV3FilesFileIdReplacePathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: PutFilesV3FilesFileIdReplaceSecurity;
}


export class PutFilesV3FilesFileIdReplaceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
