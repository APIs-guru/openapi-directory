import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ResizeVolumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class ResizeVolumeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=size" })
  size: number;
}


export class ResizeVolumeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class ResizeVolumeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ResizeVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ResizeVolumePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ResizeVolumeRequestBody;

  @SpeakeasyMetadata()
  security: ResizeVolumeSecurity;
}


export class ResizeVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  resizeVolume200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  resizeVolumeDefaultApplicationJsonObject?: ResizeVolumeDefaultApplicationJson;
}
