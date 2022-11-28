import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateMediaPathQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name?: string;
}


export class UpdateMediaPathRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  mediaPathInfo?: shared.MediaPathInfo;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  mediaPathInfo1?: shared.MediaPathInfo;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  mediaPathInfo2?: shared.MediaPathInfo;
}


export class UpdateMediaPathSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class UpdateMediaPathRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: UpdateMediaPathQueryParams;

  @SpeakeasyMetadata()
  request?: UpdateMediaPathRequests;

  @SpeakeasyMetadata()
  security: UpdateMediaPathSecurity;
}


export class UpdateMediaPathResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
