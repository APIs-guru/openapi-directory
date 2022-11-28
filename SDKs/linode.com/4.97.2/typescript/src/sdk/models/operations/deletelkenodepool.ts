import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLkeNodePoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class DeleteLkeNodePoolSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLkeNodePoolDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLkeNodePoolPathParams;

  @SpeakeasyMetadata()
  security: DeleteLkeNodePoolSecurity;
}


export class DeleteLkeNodePoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLkeNodePool200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLkeNodePoolDefaultApplicationJsonObject?: DeleteLkeNodePoolDefaultApplicationJson;
}
