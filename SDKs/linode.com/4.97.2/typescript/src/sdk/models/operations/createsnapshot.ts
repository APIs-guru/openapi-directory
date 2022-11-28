import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateSnapshotPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CreateSnapshotRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}


export class CreateSnapshotSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateSnapshotDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateSnapshotRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateSnapshotPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateSnapshotRequestBody;

  @SpeakeasyMetadata()
  security: CreateSnapshotSecurity;
}


export class CreateSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  backup?: shared.Backup;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createSnapshotDefaultApplicationJsonObject?: CreateSnapshotDefaultApplicationJson;
}
