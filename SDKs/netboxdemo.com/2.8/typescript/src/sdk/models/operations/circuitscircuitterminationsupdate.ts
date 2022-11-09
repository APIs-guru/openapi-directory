import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTerminationsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuitTermination;
}


export class CircuitsCircuitTerminationsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuitTermination?: shared.CircuitTermination;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
