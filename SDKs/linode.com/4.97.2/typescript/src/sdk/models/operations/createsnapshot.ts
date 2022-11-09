import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSnapshotPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CreateSnapshotRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label: string;
}


export class CreateSnapshotSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateSnapshotSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateSnapshotSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateSnapshotSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateSnapshotSecurityOption2;
}


export class CreateSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateSnapshotPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSnapshotRequestBody;

  @Metadata()
  security: CreateSnapshotSecurity;
}


export class CreateSnapshotDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  backup?: shared.Backup;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createSnapshotDefaultApplicationJsonObject?: CreateSnapshotDefaultApplicationJson;
}
