import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsLinkedNodesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedNodesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsLinkedNodesListPathParams;
}


export class CollectionsLinkedNodesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
