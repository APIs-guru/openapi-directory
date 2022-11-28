import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.KeyStoreConfig;
}


export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
