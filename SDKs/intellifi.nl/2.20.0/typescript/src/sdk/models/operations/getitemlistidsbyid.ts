import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetItemListIdsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetItemListIdsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetItemListIdsByIdPathParams;
}


export class GetItemListIdsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listOfItemIds?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
