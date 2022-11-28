import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CloneLinodeDiskPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=diskId" })
  diskId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class CloneLinodeDiskSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CloneLinodeDiskDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CloneLinodeDiskRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CloneLinodeDiskPathParams;

  @SpeakeasyMetadata()
  security: CloneLinodeDiskSecurity;
}


export class CloneLinodeDiskResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  disk?: shared.Disk;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cloneLinodeDiskDefaultApplicationJsonObject?: CloneLinodeDiskDefaultApplicationJson;
}
