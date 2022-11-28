import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSpotListIdsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotListIdsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotListIdsByIdPathParams;
}


export class GetSpotListIdsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOfItemIds?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
