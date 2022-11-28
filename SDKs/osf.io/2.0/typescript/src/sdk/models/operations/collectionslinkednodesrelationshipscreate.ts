import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsLinkedNodesRelationshipsCreatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsLinkedNodesRelationshipsCreatePathParams;
}


export class CollectionsLinkedNodesRelationshipsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
