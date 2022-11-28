import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResizeLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ResizeLinodeInstanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_auto_disk_resize" })
  allowAutoDiskResize?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class ResizeLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ResizeLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResizeLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResizeLinodeInstancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ResizeLinodeInstanceRequestBody;

  @SpeakeasyMetadata()
  security: ResizeLinodeInstanceSecurity;
}


export class ResizeLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resizeLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  resizeLinodeInstanceDefaultApplicationJsonObject?: ResizeLinodeInstanceDefaultApplicationJson;
}
