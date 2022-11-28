import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetLkeNodePoolPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=poolId" })
  poolId: number;
}


export class GetLkeNodePoolSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetLkeNodePoolRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetLkeNodePoolPathParams;

  @SpeakeasyMetadata()
  security: GetLkeNodePoolSecurity;
}


export class GetLkeNodePoolResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lkeNodePool?: shared.LkeNodePool;

  @SpeakeasyMetadata()
  statusCode: number;
}
