import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurityOption2;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FolderUpdateInput;

  @Metadata()
  security: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folderUpdateTaskLocator?: shared.FolderUpdateTaskLocator;

  @Metadata()
  statusCode: number;
}
