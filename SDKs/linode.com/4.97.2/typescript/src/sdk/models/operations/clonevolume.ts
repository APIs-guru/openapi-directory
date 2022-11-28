import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneVolumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class CloneVolumeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}


export class CloneVolumeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CloneVolumeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneVolumePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneVolumeRequestBody;

  @SpeakeasyMetadata()
  security: CloneVolumeSecurity;
}


export class CloneVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volume?: shared.Volume;

  @SpeakeasyMetadata()
  cloneVolumeDefaultApplicationJsonObject?: CloneVolumeDefaultApplicationJson;
}
