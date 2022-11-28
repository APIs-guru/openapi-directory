import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsLinkedNodesRelationshipsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsLinkedNodesRelationshipsDeletePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedNodesRelationshipsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
