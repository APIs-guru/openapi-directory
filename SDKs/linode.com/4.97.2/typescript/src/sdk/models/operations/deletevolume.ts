import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class DeleteVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteVolumeSecurityOption2;
}


export class DeleteVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteVolumePathParams;

  @Metadata()
  security: DeleteVolumeSecurity;
}


export class DeleteVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteVolume200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteVolumeDefaultApplicationJsonObject?: DeleteVolumeDefaultApplicationJson;
}
