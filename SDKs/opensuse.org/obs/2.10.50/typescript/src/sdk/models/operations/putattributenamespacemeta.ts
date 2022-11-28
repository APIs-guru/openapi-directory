import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAttributeNamespaceMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutAttributeNamespaceMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutAttributeNamespaceMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAttributeNamespaceMetaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PutAttributeNamespaceMetaSecurity;
}


export class PutAttributeNamespaceMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
