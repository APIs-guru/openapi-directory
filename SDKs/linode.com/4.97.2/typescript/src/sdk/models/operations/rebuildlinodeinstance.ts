import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RebuildLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RebuildLinodeInstanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorized_keys" })
  authorizedKeys?: string[];

  @SpeakeasyMetadata({ data: "json, name=authorized_users" })
  authorizedUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=booted" })
  booted?: boolean;

  @SpeakeasyMetadata({ data: "json, name=image" })
  image: string;

  @SpeakeasyMetadata({ data: "json, name=root_pass" })
  rootPass: string;

  @SpeakeasyMetadata({ data: "json, name=stackscript_data" })
  stackscriptData?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=stackscript_id" })
  stackscriptId?: number;
}


export class RebuildLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class RebuildLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RebuildLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RebuildLinodeInstancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RebuildLinodeInstanceRequestBody;

  @SpeakeasyMetadata()
  security: RebuildLinodeInstanceSecurity;
}


export class RebuildLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linode?: shared.Linode;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rebuildLinodeInstanceDefaultApplicationJsonObject?: RebuildLinodeInstanceDefaultApplicationJson;
}
