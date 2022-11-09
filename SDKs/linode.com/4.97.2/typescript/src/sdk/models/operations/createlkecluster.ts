import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLkeClusterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=k8s_version" })
  k8sVersion: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=node_pools", elemType: shared.LkeNodePoolRequestBody })
  nodePools: shared.LkeNodePoolRequestBody[];

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateLkeClusterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateLkeClusterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateLkeClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateLkeClusterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateLkeClusterSecurityOption2;
}


export class CreateLkeClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateLkeClusterRequestBody;

  @Metadata()
  security: CreateLkeClusterSecurity;
}


export class CreateLkeClusterDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLkeClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  lkeCluster?: shared.LkeCluster;

  @Metadata()
  statusCode: number;

  @Metadata()
  createLkeClusterDefaultApplicationJsonObject?: CreateLkeClusterDefaultApplicationJson;
}
