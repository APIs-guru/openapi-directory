import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NodesAddonsFoldersListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesAddonsFoldersListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NodesAddonsFoldersListPathParams;
}


export class NodesAddonsFoldersListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
