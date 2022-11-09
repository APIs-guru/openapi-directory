import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedPreprintsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedPreprintsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedPreprintsListPathParams;
}


export class CollectionsLinkedPreprintsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
