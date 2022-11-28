import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsMetadataDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsMetadataDetailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsMetadataDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
