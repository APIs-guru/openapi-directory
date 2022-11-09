import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DetachVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class DetachVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DetachVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DetachVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DetachVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DetachVolumeSecurityOption2;
}


export class DetachVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DetachVolumePathParams;

  @Metadata()
  security: DetachVolumeSecurity;
}


export class DetachVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DetachVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  detachVolume200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  detachVolumeDefaultApplicationJsonObject?: DetachVolumeDefaultApplicationJson;
}
