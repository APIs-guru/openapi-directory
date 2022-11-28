import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprPathParams;

  @SpeakeasyMetadata()
  security: DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprSecurity;
}


export class DeleteFilesV3FilesFileIdGdprDeleteArchiveGdprResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
