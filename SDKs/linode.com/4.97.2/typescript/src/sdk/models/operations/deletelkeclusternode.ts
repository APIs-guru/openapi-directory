import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLkeClusterNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class DeleteLkeClusterNodeSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLkeClusterNodeSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLkeClusterNodeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLkeClusterNodeSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLkeClusterNodeSecurityOption2;
}


export class DeleteLkeClusterNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLkeClusterNodePathParams;

  @Metadata()
  security: DeleteLkeClusterNodeSecurity;
}


export class DeleteLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeClusterNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLkeClusterNode200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLkeClusterNodeDefaultApplicationJsonObject?: DeleteLkeClusterNodeDefaultApplicationJson;
}
