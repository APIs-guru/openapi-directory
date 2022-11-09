import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuitTermination;
}


export class CircuitsCircuitTerminationsCreateResponse extends SpeakeasyBase {
  @Metadata()
  circuitTermination?: shared.CircuitTermination;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
