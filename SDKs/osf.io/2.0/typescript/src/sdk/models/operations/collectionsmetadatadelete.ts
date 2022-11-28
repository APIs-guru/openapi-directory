import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsMetadataDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsMetadataDeletePathParams;
}


export class CollectionsMetadataDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
