import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitTypesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CircuitTypeInput;
}


export class CircuitsCircuitTypesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuitType?: shared.CircuitType;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
