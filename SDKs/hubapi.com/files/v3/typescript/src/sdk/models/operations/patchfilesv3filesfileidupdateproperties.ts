import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchFilesV3FilesFileIdUpdatePropertiesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PatchFilesV3FilesFileIdUpdatePropertiesSecurityOption2;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PatchFilesV3FilesFileIdUpdatePropertiesPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FileUpdateInput;

  @Metadata()
  security: PatchFilesV3FilesFileIdUpdatePropertiesSecurity;
}


export class PatchFilesV3FilesFileIdUpdatePropertiesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
