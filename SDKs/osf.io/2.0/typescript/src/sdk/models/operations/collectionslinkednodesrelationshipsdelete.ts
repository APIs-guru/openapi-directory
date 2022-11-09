import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedNodesRelationshipsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedNodesRelationshipsDeletePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedNodesRelationshipsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
