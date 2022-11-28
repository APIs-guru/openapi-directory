import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAttributeNamespaceAttributeNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class DeleteAttributeNamespaceAttributeNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteAttributeNamespaceAttributeNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAttributeNamespaceAttributeNamePathParams;

  @SpeakeasyMetadata()
  security: DeleteAttributeNamespaceAttributeNameSecurity;
}


export class DeleteAttributeNamespaceAttributeNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
