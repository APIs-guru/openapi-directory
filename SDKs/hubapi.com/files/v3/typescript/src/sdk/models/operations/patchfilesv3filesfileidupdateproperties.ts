import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchFilesV3FilesFileIdUpdatePropertiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchFilesV3FilesFileIdUpdatePropertiesPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FileUpdateInput;

  @SpeakeasyMetadata()
  security: PatchFilesV3FilesFileIdUpdatePropertiesSecurity;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  file?: shared.File;

  @SpeakeasyMetadata()
  statusCode: number;
}
