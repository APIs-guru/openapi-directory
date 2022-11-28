import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsLinkedNodesRelationshipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsLinkedNodesRelationshipsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsLinkedNodesRelationshipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
