import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAttributeNamespacePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class DeleteAttributeNamespaceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteAttributeNamespaceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAttributeNamespacePathParams;

  @SpeakeasyMetadata()
  security: DeleteAttributeNamespaceSecurity;
}


export class DeleteAttributeNamespaceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
