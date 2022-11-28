import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsAddMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsAddMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsAddMetadataPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsAddMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
