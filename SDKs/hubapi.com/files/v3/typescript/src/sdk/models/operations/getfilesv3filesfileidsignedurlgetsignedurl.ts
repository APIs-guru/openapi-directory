import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fileId" })
  fileId: string;
}

export enum GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum {
    Thumb = "thumb",
    Icon = "icon",
    Medium = "medium",
    Preview = "preview"
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expirationSeconds" })
  expirationSeconds?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSizeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upscale" })
  upscale?: boolean;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity extends SpeakeasyBase {
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


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlPathParams;

  @SpeakeasyMetadata()
  queryParams: GetFilesV3FilesFileIdSignedUrlGetSignedUrlQueryParams;

  @SpeakeasyMetadata()
  security: GetFilesV3FilesFileIdSignedUrlGetSignedUrlSecurity;
}


export class GetFilesV3FilesFileIdSignedUrlGetSignedUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  signedUrl?: shared.SignedUrl;

  @SpeakeasyMetadata()
  statusCode: number;
}
