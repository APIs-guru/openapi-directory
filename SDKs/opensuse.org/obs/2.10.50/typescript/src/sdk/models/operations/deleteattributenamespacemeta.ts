import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class DeleteAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class DeleteAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAttributeNamespaceMetaPathParams;

  @SpeakeasyMetadata()
  security: DeleteAttributeNamespaceMetaSecurity;
}


export class DeleteAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
