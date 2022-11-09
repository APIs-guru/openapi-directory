import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateMediaPathQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class UpdateMediaPathRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  mediaPathInfo?: shared.MediaPathInfo;

  @Metadata({ data: "request, media_type=application/json" })
  mediaPathInfo1?: shared.MediaPathInfo;

  @Metadata({ data: "request, media_type=text/json" })
  mediaPathInfo2?: shared.MediaPathInfo;
}


export class UpdateMediaPathSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateMediaPathRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: UpdateMediaPathQueryParams;

  @Metadata()
  request?: UpdateMediaPathRequests;

  @Metadata()
  security: UpdateMediaPathSecurity;
}


export class UpdateMediaPathResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
