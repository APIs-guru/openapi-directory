import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ResizeVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class ResizeVolumeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=size" })
  size: number;
}


export class ResizeVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ResizeVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ResizeVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ResizeVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ResizeVolumeSecurityOption2;
}


export class ResizeVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResizeVolumePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ResizeVolumeRequestBody;

  @Metadata()
  security: ResizeVolumeSecurity;
}


export class ResizeVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResizeVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  resizeVolume200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  resizeVolumeDefaultApplicationJsonObject?: ResizeVolumeDefaultApplicationJson;
}
