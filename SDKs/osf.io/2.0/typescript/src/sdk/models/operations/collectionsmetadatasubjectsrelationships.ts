import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsMetadataSubjectsRelationshipsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataSubjectsRelationshipsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsMetadataSubjectsRelationshipsPathParams;
}


export class CollectionsMetadataSubjectsRelationshipsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
