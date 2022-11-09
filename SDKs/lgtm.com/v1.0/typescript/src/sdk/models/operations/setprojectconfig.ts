import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetProjectConfigPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project-id" })
  projectId: number;
}


export class SetProjectConfigSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  accessToken: shared.SchemeAccessToken;
}


export class SetProjectConfigRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetProjectConfigPathParams;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  request: string;

  @Metadata()
  security: SetProjectConfigSecurity;
}


export class SetProjectConfigResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
