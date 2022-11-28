import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class GetAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAttributeNamespaceAttributeNameMetaPathParams;

  @SpeakeasyMetadata()
  security: GetAttributeNamespaceAttributeNameMetaSecurity;
}


export class GetAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
