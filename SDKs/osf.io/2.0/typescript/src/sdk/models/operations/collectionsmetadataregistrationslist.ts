import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsMetadataRegistrationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataRegistrationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsMetadataRegistrationsListPathParams;
}


export class CollectionsMetadataRegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
