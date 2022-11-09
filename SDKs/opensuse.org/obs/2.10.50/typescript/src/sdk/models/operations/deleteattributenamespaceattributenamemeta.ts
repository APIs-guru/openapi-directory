import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class DeleteAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAttributeNamespaceAttributeNameMetaPathParams;

  @Metadata()
  security: DeleteAttributeNamespaceAttributeNameMetaSecurity;
}


export class DeleteAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
