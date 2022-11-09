import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAttributeNamespaceMetaPathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PutAttributeNamespaceMetaSecurity;
}


export class PutAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
