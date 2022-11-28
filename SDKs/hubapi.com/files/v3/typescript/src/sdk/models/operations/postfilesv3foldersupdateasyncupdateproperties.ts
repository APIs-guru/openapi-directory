import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FolderUpdateInput;

  @SpeakeasyMetadata()
  security: PostFilesV3FoldersUpdateAsyncUpdatePropertiesSecurity;
}


export class PostFilesV3FoldersUpdateAsyncUpdatePropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folderUpdateTaskLocator?: shared.FolderUpdateTaskLocator;

  @SpeakeasyMetadata()
  statusCode: number;
}
