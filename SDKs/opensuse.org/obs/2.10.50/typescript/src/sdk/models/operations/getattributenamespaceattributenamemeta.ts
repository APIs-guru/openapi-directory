import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAttributeNamespaceAttributeNameMetaPathParams;

  @Metadata()
  security: GetAttributeNamespaceAttributeNameMetaSecurity;
}


export class GetAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
