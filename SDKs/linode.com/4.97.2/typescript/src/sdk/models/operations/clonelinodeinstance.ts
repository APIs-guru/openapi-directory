import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneLinodeInstancePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CloneLinodeInstanceRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backups_enabled" })
  backupsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: number[];

  @SpeakeasyMetadata({ data: "json, name=disks" })
  disks?: number[];

  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=linode_id" })
  linodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;
}


export class CloneLinodeInstanceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CloneLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneLinodeInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneLinodeInstancePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CloneLinodeInstanceRequestBody;

  @SpeakeasyMetadata()
  security: CloneLinodeInstanceSecurity;
}


export class CloneLinodeInstanceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  linode?: shared.Linode;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneLinodeInstanceDefaultApplicationJsonObject?: CloneLinodeInstanceDefaultApplicationJson;
}
