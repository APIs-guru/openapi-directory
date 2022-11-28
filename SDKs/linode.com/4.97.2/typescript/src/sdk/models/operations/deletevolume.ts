import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVolumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class DeleteVolumeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteVolumeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVolumePathParams;

  @SpeakeasyMetadata()
  security: DeleteVolumeSecurity;
}


export class DeleteVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteVolume200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteVolumeDefaultApplicationJsonObject?: DeleteVolumeDefaultApplicationJson;
}
