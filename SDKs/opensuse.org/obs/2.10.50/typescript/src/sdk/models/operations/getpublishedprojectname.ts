import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPublishedProjectNamePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_name" })
  projectName: string;
}


export class GetPublishedProjectNameSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basicAuthentication: shared.SchemeBasicAuthentication;
}


export class GetPublishedProjectNameRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPublishedProjectNamePathParams;

  @SpeakeasyMetadata()
  security: GetPublishedProjectNameSecurity;
}


export class GetPublishedProjectNameResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
