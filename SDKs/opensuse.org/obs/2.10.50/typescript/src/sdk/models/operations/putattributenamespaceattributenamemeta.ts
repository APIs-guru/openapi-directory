import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutAttributeNamespaceAttributeNameMetaPathParams;

  @Metadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @Metadata()
  security: PutAttributeNamespaceAttributeNameMetaSecurity;
}


export class PutAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
