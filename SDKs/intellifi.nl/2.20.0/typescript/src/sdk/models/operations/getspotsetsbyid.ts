import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpotSetsByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotSetsByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotSetsByIdPathParams;
}


export class GetSpotSetsByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spotSet?: shared.SpotSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
