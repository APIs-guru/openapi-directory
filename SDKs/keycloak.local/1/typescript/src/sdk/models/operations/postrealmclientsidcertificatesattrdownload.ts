import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdCertificatesAttrDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdCertificatesAttrDownloadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.KeyStoreConfig;
}


export class PostRealmClientsIdCertificatesAttrDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
