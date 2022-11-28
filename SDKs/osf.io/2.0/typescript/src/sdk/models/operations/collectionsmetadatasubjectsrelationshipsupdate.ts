import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsMetadataSubjectsRelationshipsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataSubjectsRelationshipsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsMetadataSubjectsRelationshipsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsMetadataSubjectsRelationshipsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
