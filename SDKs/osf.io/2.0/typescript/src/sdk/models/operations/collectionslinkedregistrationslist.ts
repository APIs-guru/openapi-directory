import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CollectionsLinkedRegistrationsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsLinkedRegistrationsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CollectionsLinkedRegistrationsListPathParams;
}


export class CollectionsLinkedRegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
