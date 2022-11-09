import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutLkeNodePoolPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class PutLkeNodePoolSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class PutLkeNodePoolSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class PutLkeNodePoolSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: PutLkeNodePoolSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: PutLkeNodePoolSecurityOption2;
}


export class PutLkeNodePoolRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutLkeNodePoolPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: PutLkeNodePoolSecurity;
}


export class PutLkeNodePoolResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeNodePool?: shared.LkeNodePool;

  @Metadata()
  statusCode: number;
}
