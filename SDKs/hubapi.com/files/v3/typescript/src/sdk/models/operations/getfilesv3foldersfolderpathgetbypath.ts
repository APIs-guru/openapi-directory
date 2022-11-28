import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesV3FoldersFolderPathGetByPathPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=folderPath" })
  folderPath: string;
}


export class GetFilesV3FoldersFolderPathGetByPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];
}


export class GetFilesV3FoldersFolderPathGetByPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy?: shared.SchemeOauth2Legacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey?: shared.SchemeHapikey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  privateAppsLegacy1?: shared.SchemePrivateAppsLegacy;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy1?: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersFolderPathGetByPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesV3FoldersFolderPathGetByPathPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFilesV3FoldersFolderPathGetByPathQueryParams;

  @SpeakeasyMetadata()
  security: GetFilesV3FoldersFolderPathGetByPathSecurity;
}


export class GetFilesV3FoldersFolderPathGetByPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  folder?: shared.Folder;

  @SpeakeasyMetadata()
  statusCode: number;
}
