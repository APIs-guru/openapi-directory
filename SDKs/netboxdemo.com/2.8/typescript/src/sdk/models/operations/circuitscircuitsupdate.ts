import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuitInput;
}


export class CircuitsCircuitsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuit?: shared.Circuit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
