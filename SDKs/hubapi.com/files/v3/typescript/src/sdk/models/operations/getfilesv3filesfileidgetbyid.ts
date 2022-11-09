import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FilesFileIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}


export class GetFilesV3FilesFileIdGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];
}


export class GetFilesV3FilesFileIdGetByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesFileIdGetByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FilesFileIdGetByIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesFileIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FilesFileIdGetByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FilesFileIdGetByIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FilesFileIdGetByIdSecurityOption3;
}


export class GetFilesV3FilesFileIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FilesFileIdGetByIdPathParams;

  @Metadata()
  queryParams: GetFilesV3FilesFileIdGetByIdQueryParams;

  @Metadata()
  security: GetFilesV3FilesFileIdGetByIdSecurity;
}


export class GetFilesV3FilesFileIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  file?: shared.File;

  @Metadata()
  statusCode: number;
}
