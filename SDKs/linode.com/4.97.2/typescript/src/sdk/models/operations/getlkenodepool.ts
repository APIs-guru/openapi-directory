import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class GetLkeNodePoolSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeNodePoolSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeNodePoolSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeNodePoolSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeNodePoolSecurityOption2;
}


export class GetLkeNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeNodePoolPathParams;

  @Metadata()
  security: GetLkeNodePoolSecurity;
}


export class GetLkeNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeNodePool?: shared.LkeNodePool;

  @Metadata()
  statusCode: number;
}
