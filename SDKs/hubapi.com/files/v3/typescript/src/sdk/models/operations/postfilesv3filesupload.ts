import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFilesV3FilesUploadSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostFilesV3FilesUploadSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FilesUploadSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostFilesV3FilesUploadSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostFilesV3FilesUploadSecurityOption2;
}


export class PostFilesV3FilesUploadRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: any;

  @Metadata()
  security: PostFilesV3FilesUploadSecurity;
}


export class PostFilesV3FilesUploadResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
