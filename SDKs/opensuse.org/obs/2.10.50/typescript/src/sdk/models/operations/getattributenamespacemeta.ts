import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttributeNamespaceMetaPathParams;

  @SpeakeasyMetadata()
  security: GetAttributeNamespaceMetaSecurity;
}


export class GetAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
