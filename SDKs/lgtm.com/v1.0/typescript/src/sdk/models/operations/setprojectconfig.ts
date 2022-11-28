import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetProjectConfigPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class SetProjectConfigSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class SetProjectConfigRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetProjectConfigPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-yaml" })
  request: string;

  @SpeakeasyMetadata()
  security: SetProjectConfigSecurity;
}


export class SetProjectConfigResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
