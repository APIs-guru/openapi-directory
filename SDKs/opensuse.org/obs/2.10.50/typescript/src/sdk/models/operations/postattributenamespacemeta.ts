import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PostAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PostAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostAttributeNamespaceMetaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PostAttributeNamespaceMetaSecurity;
}


export class PostAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
