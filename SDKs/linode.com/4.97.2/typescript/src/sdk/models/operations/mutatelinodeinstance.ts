import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MutateLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class MutateLinodeInstanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allow_auto_disk_resize" })
  allowAutoDiskResize?: boolean;
}


export class MutateLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class MutateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class MutateLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MutateLinodeInstancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: MutateLinodeInstanceRequestBody;

  @SpeakeasyMetadata()
  security: MutateLinodeInstanceSecurity;
}


export class MutateLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  mutateLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  mutateLinodeInstanceDefaultApplicationJsonObject?: MutateLinodeInstanceDefaultApplicationJson;
}
