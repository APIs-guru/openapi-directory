import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesV3FilesSearchDoSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=allowsAnonymousAccess" })
  allowsAnonymousAccess?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAt" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtGte" })
  createdAtGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=createdAtLte" })
  createdAtLte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=isUsableInContent" })
  isUsableInContent?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parentFolderId" })
  parentFolderId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAt" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtGte" })
  updatedAtGte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAtLte" })
  updatedAtLte?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetFilesV3FilesSearchDoSearchSecurity extends SpeakeasyBase {
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


export class GetFilesV3FilesSearchDoSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFilesV3FilesSearchDoSearchQueryParams;

  @SpeakeasyMetadata()
  security: GetFilesV3FilesSearchDoSearchSecurity;
}


export class GetFilesV3FilesSearchDoSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  collectionResponseFile?: shared.CollectionResponseFile;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
