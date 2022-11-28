import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsMetadataSubjectsRelationshipsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataSubjectsRelationshipsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsMetadataSubjectsRelationshipsPathParams;
}


export class CollectionsMetadataSubjectsRelationshipsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
