import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFilesV3FoldersCreateSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostFilesV3FoldersCreateSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FoldersCreateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostFilesV3FoldersCreateSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostFilesV3FoldersCreateSecurityOption2;
}


export class PostFilesV3FoldersCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FolderInput;

  @Metadata()
  security: PostFilesV3FoldersCreateSecurity;
}


export class PostFilesV3FoldersCreateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folder?: shared.Folder;

  @Metadata()
  statusCode: number;
}
