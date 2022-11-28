import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpotSetByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=setId" })
  setId: string;
}


export class GetSpotSetByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotSetByIdPathParams;
}


export class GetSpotSetByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spotSet?: shared.SpotSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
