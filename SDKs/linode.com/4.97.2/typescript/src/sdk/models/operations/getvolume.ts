import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}


export class GetVolumeQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetVolumeSecurityOption2;
}


export class GetVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVolumePathParams;

  @Metadata()
  queryParams: GetVolumeQueryParams;

  @Metadata()
  security: GetVolumeSecurity;
}


export class GetVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: shared.Volume;

  @Metadata()
  getVolumeDefaultApplicationJsonObject?: GetVolumeDefaultApplicationJson;
}
