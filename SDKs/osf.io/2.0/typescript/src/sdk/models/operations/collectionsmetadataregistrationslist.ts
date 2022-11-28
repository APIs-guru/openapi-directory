import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsMetadataRegistrationsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsMetadataRegistrationsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsMetadataRegistrationsListPathParams;
}


export class CollectionsMetadataRegistrationsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
