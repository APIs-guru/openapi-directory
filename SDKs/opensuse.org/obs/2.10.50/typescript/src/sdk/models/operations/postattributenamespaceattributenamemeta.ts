import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PostAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostAttributeNamespaceAttributeNameMetaPathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PostAttributeNamespaceAttributeNameMetaSecurity;
}


export class PostAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
