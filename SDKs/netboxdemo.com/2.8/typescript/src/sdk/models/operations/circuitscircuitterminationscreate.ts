import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitTerminationsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuitTerminationInput;
}


export class CircuitsCircuitTerminationsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuitTermination?: shared.CircuitTermination;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
