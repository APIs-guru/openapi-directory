import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FoldersFolderIdGetByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folderId" })
  folderId: string;
}


export class GetFilesV3FoldersFolderIdGetByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];
}


export class GetFilesV3FoldersFolderIdGetByIdSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersFolderIdGetByIdSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FoldersFolderIdGetByIdSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersFolderIdGetByIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FoldersFolderIdGetByIdSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FoldersFolderIdGetByIdSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FoldersFolderIdGetByIdSecurityOption3;
}


export class GetFilesV3FoldersFolderIdGetByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FoldersFolderIdGetByIdPathParams;

  @Metadata()
  queryParams: GetFilesV3FoldersFolderIdGetByIdQueryParams;

  @Metadata()
  security: GetFilesV3FoldersFolderIdGetByIdSecurity;
}


export class GetFilesV3FoldersFolderIdGetByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folder?: shared.Folder;

  @Metadata()
  statusCode: number;
}
