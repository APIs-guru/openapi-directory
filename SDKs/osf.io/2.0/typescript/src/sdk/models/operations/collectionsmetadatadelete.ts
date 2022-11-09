import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsMetadataDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsMetadataDeletePathParams;
}


export class CollectionsMetadataDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
