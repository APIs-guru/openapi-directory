import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBackupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetBackupsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetBackups200ApplicationJsonAutomaticDisks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filesystem" })
  filesystem?: shared.FilesystemEnum;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;
}

export enum GetBackups200ApplicationJsonAutomaticStatusEnum {
    Paused = "paused",
    Pending = "pending",
    Running = "running",
    NeedsPostProcessing = "needsPostProcessing",
    Successful = "successful",
    Failed = "failed",
    UserAborted = "userAborted"
}


export class GetBackups200ApplicationJsonAutomatic extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configs" })
  configs?: string[];

  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=disks", elemType: GetBackups200ApplicationJsonAutomaticDisks })
  disks?: GetBackups200ApplicationJsonAutomaticDisks[];

  @SpeakeasyMetadata({ data: "json, name=finished" })
  finished?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetBackups200ApplicationJsonAutomaticStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=updated" })
  updated?: Date;
}


export class GetBackups200ApplicationJsonSnapshot extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: shared.Backup;

  @SpeakeasyMetadata({ data: "json, name=in_progress" })
  inProgress?: shared.Backup;
}


export class GetBackups200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automatic", elemType: GetBackups200ApplicationJsonAutomatic })
  automatic?: GetBackups200ApplicationJsonAutomatic[];

  @SpeakeasyMetadata({ data: "json, name=snapshot" })
  snapshot?: GetBackups200ApplicationJsonSnapshot;
}


export class GetBackupsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetBackupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBackupsPathParams;

  @SpeakeasyMetadata()
  security: GetBackupsSecurity;
}


export class GetBackupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getBackups200ApplicationJsonObject?: GetBackups200ApplicationJson;

  @SpeakeasyMetadata()
  getBackupsDefaultApplicationJsonObject?: GetBackupsDefaultApplicationJson;
}
