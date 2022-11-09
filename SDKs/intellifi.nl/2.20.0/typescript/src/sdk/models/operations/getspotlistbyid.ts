import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSpotListByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotListByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSpotListByIdPathParams;
}


export class GetSpotListByIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  spotList?: shared.SpotList;

  @Metadata()
  statusCode: number;
}
