import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateLkeClusterRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=k8s_version" })
  k8sVersion: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=node_pools", elemType: shared.LkeNodePoolRequestBody })
  nodePools: shared.LkeNodePoolRequestBody[];

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}


export class CreateLkeClusterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateLkeClusterDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLkeClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateLkeClusterRequestBody;

  @SpeakeasyMetadata()
  security: CreateLkeClusterSecurity;
}


export class CreateLkeClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lkeCluster?: shared.LkeCluster;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createLkeClusterDefaultApplicationJsonObject?: CreateLkeClusterDefaultApplicationJson;
}
