import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRealmClientsIdCertificatesAttrGeneratePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attr" })
  attr: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=realm" })
  realm: string;
}


export class PostRealmClientsIdCertificatesAttrGenerateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostRealmClientsIdCertificatesAttrGeneratePathParams;
}


export class PostRealmClientsIdCertificatesAttrGenerateResponse extends SpeakeasyBase {
  @Metadata()
  certificateRepresentation?: shared.CertificateRepresentation;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
