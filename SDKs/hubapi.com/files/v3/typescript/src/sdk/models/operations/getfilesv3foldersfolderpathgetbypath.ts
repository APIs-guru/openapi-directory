import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FoldersFolderPathGetByPathPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=folderPath" })
  folderPath: string;
}


export class GetFilesV3FoldersFolderPathGetByPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];
}


export class GetFilesV3FoldersFolderPathGetByPathSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersFolderPathGetByPathSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FoldersFolderPathGetByPathSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersFolderPathGetByPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FoldersFolderPathGetByPathSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FoldersFolderPathGetByPathSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FoldersFolderPathGetByPathSecurityOption3;
}


export class GetFilesV3FoldersFolderPathGetByPathRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FoldersFolderPathGetByPathPathParams;

  @Metadata()
  queryParams: GetFilesV3FoldersFolderPathGetByPathQueryParams;

  @Metadata()
  security: GetFilesV3FoldersFolderPathGetByPathSecurity;
}


export class GetFilesV3FoldersFolderPathGetByPathResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  folder?: shared.Folder;

  @Metadata()
  statusCode: number;
}
