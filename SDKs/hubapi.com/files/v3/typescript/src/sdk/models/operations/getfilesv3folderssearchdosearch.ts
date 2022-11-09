import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FoldersSearchDoSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=after" })
  after?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=before" })
  before?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAt" })
  createdAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAtGte" })
  createdAtGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=createdAtLte" })
  createdAtLte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

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

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAt" })
  updatedAt?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAtGte" })
  updatedAtGte?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updatedAtLte" })
  updatedAtLte?: Date;
}


export class GetFilesV3FoldersSearchDoSearchSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersSearchDoSearchSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FoldersSearchDoSearchSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FoldersSearchDoSearchSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FoldersSearchDoSearchSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FoldersSearchDoSearchSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FoldersSearchDoSearchSecurityOption3;
}


export class GetFilesV3FoldersSearchDoSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFilesV3FoldersSearchDoSearchQueryParams;

  @Metadata()
  security: GetFilesV3FoldersSearchDoSearchSecurity;
}


export class GetFilesV3FoldersSearchDoSearchResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  collectionResponseFolder?: shared.CollectionResponseFolder;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
