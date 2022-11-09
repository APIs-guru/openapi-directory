import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSpotListIdsByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotListIdsByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotListIdsByIdPathParams;
}


export class GetSpotListIdsByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listOfItemIds?: string[];

  @Metadata()
  statusCode: number;
}
