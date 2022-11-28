import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpotListByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotListByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotListByIdPathParams;
}


export class GetSpotListByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spotList?: shared.SpotList;

  @SpeakeasyMetadata()
  statusCode: number;
}
