import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class DeleteAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAttributeNamespaceAttributeNameMetaPathParams;

  @SpeakeasyMetadata()
  security: DeleteAttributeNamespaceAttributeNameMetaSecurity;
}


export class DeleteAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
