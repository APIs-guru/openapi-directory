import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FilesSearchDoSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=allowsAnonymousAccess" })
  allowsAnonymousAccess?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAtGte" })
  createdAtGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAtLte" })
  createdAtLte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=encoding" })
  encoding?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=extension" })
  extension?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=isUsableInContent" })
  isUsableInContent?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parentFolderId" })
  parentFolderId?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=properties" })
  properties?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAtGte" })
  updatedAtGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAtLte" })
  updatedAtLte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=url" })
  url?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class GetFilesV3FilesSearchDoSearchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesSearchDoSearchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FilesSearchDoSearchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesSearchDoSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FilesSearchDoSearchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FilesSearchDoSearchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FilesSearchDoSearchSecurityOption3;
}


export class GetFilesV3FilesSearchDoSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFilesV3FilesSearchDoSearchQueryParams;

  @Metadata()
  security: GetFilesV3FilesSearchDoSearchSecurity;
}


export class GetFilesV3FilesSearchDoSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseFile?: shared.CollectionResponseFile;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
