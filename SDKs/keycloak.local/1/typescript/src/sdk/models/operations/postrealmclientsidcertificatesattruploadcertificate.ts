import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdCertificatesAttrUploadCertificatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrUploadCertificateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdCertificatesAttrUploadCertificatePathParams;
}


export class PostRealmClientsIdCertificatesAttrUploadCertificateResponse extends SpeakeasyBase {
  @Metadata()
  certificateRepresentation?: shared.CertificateRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
