import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSpotsetsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSpotsetsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSpotsetsIdPathParams;
}


export class GetSpotsetsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  spotSet?: shared.SpotSet;

  @SpeakeasyMetadata()
  statusCode: number;
}
