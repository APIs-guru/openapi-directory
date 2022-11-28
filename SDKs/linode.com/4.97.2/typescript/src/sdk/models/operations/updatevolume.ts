import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateVolumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class UpdateVolumeRequestBodyInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class UpdateVolumeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateVolumeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateVolumePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpdateVolumeRequestBodyInput;

  @SpeakeasyMetadata()
  security: UpdateVolumeSecurity;
}


export class UpdateVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volume?: shared.Volume;

  @SpeakeasyMetadata()
  updateVolumeDefaultApplicationJsonObject?: UpdateVolumeDefaultApplicationJson;
}
