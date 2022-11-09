import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NodesAddonsFoldersListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=node_id" })
  nodeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=provider" })
  provider: string;
}


export class NodesAddonsFoldersListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NodesAddonsFoldersListPathParams;
}


export class NodesAddonsFoldersListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
