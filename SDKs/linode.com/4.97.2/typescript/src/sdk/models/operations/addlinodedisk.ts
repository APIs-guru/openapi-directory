import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddLinodeDiskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeDiskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class AddLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddLinodeDiskPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DiskRequest;

  @SpeakeasyMetadata()
  security: AddLinodeDiskSecurity;
}


export class AddLinodeDiskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disk?: shared.Disk;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addLinodeDiskDefaultApplicationJsonObject?: AddLinodeDiskDefaultApplicationJson;
}
