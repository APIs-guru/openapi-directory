import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsDeletePathParams;
}


export class CollectionsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
