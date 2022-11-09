import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTerminationsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuitTermination;
}


export class CircuitsCircuitTerminationsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuitTermination?: shared.CircuitTermination;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
