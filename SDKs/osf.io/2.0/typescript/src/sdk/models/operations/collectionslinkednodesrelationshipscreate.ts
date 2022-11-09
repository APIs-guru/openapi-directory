import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedNodesRelationshipsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesRelationshipsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedNodesRelationshipsCreatePathParams;
}


export class CollectionsLinkedNodesRelationshipsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
