import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetBackupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetBackupsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetBackupsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetBackupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetBackupsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetBackupsSecurityOption2;
}


export class GetBackupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetBackupsPathParams;

  @Metadata()
  security: GetBackupsSecurity;
}


export class GetBackups200ApplicationJsonAutomaticDisks extends SpeakeasyBase {
  @Metadata({ data: "json, name=filesystem" })
  filesystem?: shared.FilesystemEnum;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;
}

export enum GetBackups200ApplicationJsonAutomaticStatusEnum {
    Paused = "paused"
,    Pending = "pending"
,    Running = "running"
,    NeedsPostProcessing = "needsPostProcessing"
,    Successful = "successful"
,    Failed = "failed"
,    UserAborted = "userAborted"
}


export class GetBackups200ApplicationJsonAutomatic extends SpeakeasyBase {
  @Metadata({ data: "json, name=configs" })
  configs?: string[];

  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=disks", elemType: operations.GetBackups200ApplicationJsonAutomaticDisks })
  disks?: GetBackups200ApplicationJsonAutomaticDisks[];

  @Metadata({ data: "json, name=finished" })
  finished?: Date;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=status" })
  status?: GetBackups200ApplicationJsonAutomaticStatusEnum;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}


export class GetBackups200ApplicationJsonSnapshot extends SpeakeasyBase {
  @Metadata({ data: "json, name=current" })
  current?: shared.Backup;

  @Metadata({ data: "json, name=in_progress" })
  inProgress?: shared.Backup;
}


export class GetBackups200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=automatic", elemType: operations.GetBackups200ApplicationJsonAutomatic })
  automatic?: GetBackups200ApplicationJsonAutomatic[];

  @Metadata({ data: "json, name=snapshot" })
  snapshot?: GetBackups200ApplicationJsonSnapshot;
}


export class GetBackupsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetBackupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getBackups200ApplicationJsonObject?: GetBackups200ApplicationJson;

  @Metadata()
  getBackupsDefaultApplicationJsonObject?: GetBackupsDefaultApplicationJson;
}
