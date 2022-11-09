import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}

export enum GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum {
    Thumb = "thumb"
,    Icon = "icon"
,    Medium = "medium"
,    Preview = "preview"
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expirationSeconds" })
  expirationSeconds?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=upscale" })
  upscale?: boolean;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  hapikey: shared.SchemeHapikey;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Legacy: shared.SchemeOauth2Legacy;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurityOption3;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams;

  @Metadata()
  queryParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams;

  @Metadata()
  security: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  signedUrl?: shared.SignedUrl;

  @Metadata()
  statusCode: number;
}
