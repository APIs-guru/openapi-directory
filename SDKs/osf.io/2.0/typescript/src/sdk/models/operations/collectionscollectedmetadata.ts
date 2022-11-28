import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CollectionsCollectedMetadataPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=cgm_id" })
  cgmId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=collection_id" })
  collectionId: string;
}


export class CollectionsCollectedMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CollectionsCollectedMetadataPathParams;
}


export class CollectionsCollectedMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
