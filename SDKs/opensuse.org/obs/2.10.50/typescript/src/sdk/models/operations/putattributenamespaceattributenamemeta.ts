import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutAttributeNamespaceAttributeNameMetaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=attribute_name" })
  attributeName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=namespace" })
  namespace: string;
}


export class PutAttributeNamespaceAttributeNameMetaSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class PutAttributeNamespaceAttributeNameMetaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutAttributeNamespaceAttributeNameMetaPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/xml" })
  request: Uint8Array;

  @SpeakeasyMetadata()
  security: PutAttributeNamespaceAttributeNameMetaSecurity;
}


export class PutAttributeNamespaceAttributeNameMetaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
