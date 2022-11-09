import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CloneVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class CloneVolumeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;
}


export class CloneVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CloneVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CloneVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CloneVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CloneVolumeSecurityOption2;
}


export class CloneVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CloneVolumePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CloneVolumeRequestBody;

  @Metadata()
  security: CloneVolumeSecurity;
}


export class CloneVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: shared.Volume;

  @Metadata()
  cloneVolumeDefaultApplicationJsonObject?: CloneVolumeDefaultApplicationJson;
}
