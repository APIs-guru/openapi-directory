import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsMetadataSubjectsRelationshipsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataSubjectsRelationshipsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsMetadataSubjectsRelationshipsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class CollectionsMetadataSubjectsRelationshipsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
