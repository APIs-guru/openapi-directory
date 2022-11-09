import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedNodesListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedNodesListPathParams;
}


export class CollectionsLinkedNodesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
