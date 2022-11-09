import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLkeNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class DeleteLkeNodePoolSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLkeNodePoolSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLkeNodePoolSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLkeNodePoolSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLkeNodePoolSecurityOption2;
}


export class DeleteLkeNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLkeNodePoolPathParams;

  @Metadata()
  security: DeleteLkeNodePoolSecurity;
}


export class DeleteLkeNodePoolDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLkeNodePool200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLkeNodePoolDefaultApplicationJsonObject?: DeleteLkeNodePoolDefaultApplicationJson;
}
