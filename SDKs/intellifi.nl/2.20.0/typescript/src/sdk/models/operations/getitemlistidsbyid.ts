import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetItemListIdsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetItemListIdsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetItemListIdsByIdPathParams;
}


export class GetItemListIdsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOfItemIds?: string[];

  @Metadata()
  statusCode: number;
}
