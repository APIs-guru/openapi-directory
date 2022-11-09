import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLkeClusterPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class DeleteLkeClusterSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLkeClusterSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLkeClusterSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLkeClusterSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLkeClusterSecurityOption2;
}


export class DeleteLkeClusterRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLkeClusterPathParams;

  @Metadata()
  security: DeleteLkeClusterSecurity;
}


export class DeleteLkeClusterDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeClusterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLkeCluster200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLkeClusterDefaultApplicationJsonObject?: DeleteLkeClusterDefaultApplicationJson;
}
