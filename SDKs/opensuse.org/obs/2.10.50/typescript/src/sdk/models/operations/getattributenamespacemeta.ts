import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAttributeNamespaceMetaPathParams;

  @Metadata()
  security: GetAttributeNamespaceMetaSecurity;
}


export class GetAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
