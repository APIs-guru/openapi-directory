import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdCertificatesAttrGenerateAndDownloadPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.KeyStoreConfig;
}


export class PostRealmClientsIdCertificatesAttrGenerateAndDownloadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  postRealmClientsIdCertificatesAttrGenerateAndDownload2XxApplicationOctetStreamByteString?: string;

  @Metadata()
  statusCode: number;
}
