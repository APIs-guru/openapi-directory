import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MigrateLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class MigrateLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class MigrateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class MigrateLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MigrateLinodeInstancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: MigrateLinodeInstanceSecurity;
}


export class MigrateLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  migrateLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  migrateLinodeInstanceDefaultApplicationJsonObject?: MigrateLinodeInstanceDefaultApplicationJson;
}
