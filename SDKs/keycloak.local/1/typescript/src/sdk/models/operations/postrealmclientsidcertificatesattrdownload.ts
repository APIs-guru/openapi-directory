import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdCertificatesAttrDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdCertificatesAttrDownloadPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KeyStoreConfig;
}


export class PostRealmClientsIdCertificatesAttrDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postRealmClientsIdCertificatesAttrDownload2XxApplicationOctetStreamByteString?: string;

  @Metadata()
  statusCode: number;
}
