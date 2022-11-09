import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateVolumePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=volumeId" })
  volumeId: number;
}

export enum UpdateVolumeRequestBodyStatusEnum {
    Creating = "creating"
,    Active = "active"
,    Resizing = "resizing"
,    ContactSupport = "contact_support"
}


export class UpdateVolumeRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=filesystem_path" })
  filesystemPath?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=linode_id" })
  linodeId?: any;

  @Metadata({ data: "json, name=linode_label" })
  linodeLabel?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=size" })
  size?: any;

  @Metadata({ data: "json, name=status" })
  status?: UpdateVolumeRequestBodyStatusEnum;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=updated" })
  updated?: Date;
}


export class UpdateVolumeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateVolumeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateVolumeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateVolumeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateVolumeSecurityOption2;
}


export class UpdateVolumeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateVolumePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: UpdateVolumeRequestBody;

  @Metadata()
  security: UpdateVolumeSecurity;
}


export class UpdateVolumeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateVolumeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: shared.Volume;

  @Metadata()
  updateVolumeDefaultApplicationJsonObject?: UpdateVolumeDefaultApplicationJson;
}
