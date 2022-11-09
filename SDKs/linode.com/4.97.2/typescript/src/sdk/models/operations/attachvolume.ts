import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AttachVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class AttachVolumeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=config_id" })
  configId?: number;

  @Metadata({ data: "json, name=linode_id" })
  linodeId: number;

  @Metadata({ data: "json, name=persist_across_boots" })
  persistAcrossBoots?: boolean;
}


export class AttachVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AttachVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AttachVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AttachVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AttachVolumeSecurityOption2;
}


export class AttachVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AttachVolumePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AttachVolumeRequestBody;

  @Metadata()
  security: AttachVolumeSecurity;
}


export class AttachVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AttachVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: shared.Volume;

  @Metadata()
  attachVolumeDefaultApplicationJsonObject?: AttachVolumeDefaultApplicationJson;
}
