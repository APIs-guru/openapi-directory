import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsDetailPathParams;
}


export class CollectionsDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
