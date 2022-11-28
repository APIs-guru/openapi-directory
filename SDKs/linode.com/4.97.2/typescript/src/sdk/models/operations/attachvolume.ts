import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AttachVolumePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class AttachVolumeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config_id" })
  configId?: number;

  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId: number;

  @SpeakeasyMetadata({ data: "json, name=persist_across_boots" })
  persistAcrossBoots?: boolean;
}


export class AttachVolumeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AttachVolumeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AttachVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AttachVolumePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AttachVolumeRequestBody;

  @SpeakeasyMetadata()
  security: AttachVolumeSecurity;
}


export class AttachVolumeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  volume?: shared.Volume;

  @SpeakeasyMetadata()
  attachVolumeDefaultApplicationJsonObject?: AttachVolumeDefaultApplicationJson;
}
