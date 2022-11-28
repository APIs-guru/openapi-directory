import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLkeClusterNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class DeleteLkeClusterNodeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLkeClusterNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLkeClusterNodePathParams;

  @SpeakeasyMetadata()
  security: DeleteLkeClusterNodeSecurity;
}


export class DeleteLkeClusterNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteLkeClusterNode200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteLkeClusterNodeDefaultApplicationJsonObject?: DeleteLkeClusterNodeDefaultApplicationJson;
}
