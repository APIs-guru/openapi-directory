import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedNodesRelationshipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedNodesRelationshipsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedNodesRelationshipsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
