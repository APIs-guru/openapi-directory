import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLkeClusterPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;
}


export class DeleteLkeClusterSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLkeClusterDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLkeClusterPathParams;

  @SpeakeasyMetadata()
  security: DeleteLkeClusterSecurity;
}


export class DeleteLkeClusterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLkeCluster200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLkeClusterDefaultApplicationJsonObject?: DeleteLkeClusterDefaultApplicationJson;
}
