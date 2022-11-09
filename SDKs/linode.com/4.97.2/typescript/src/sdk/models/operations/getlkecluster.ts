import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLkeClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class GetLkeClusterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLkeClusterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLkeClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLkeClusterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLkeClusterSecurityOption2;
}


export class GetLkeClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLkeClusterPathParams;

  @Metadata()
  security: GetLkeClusterSecurity;
}


export class GetLkeClusterDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLkeClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeCluster?: shared.LkeCluster;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLkeClusterDefaultApplicationJsonObject?: GetLkeClusterDefaultApplicationJson;
}
