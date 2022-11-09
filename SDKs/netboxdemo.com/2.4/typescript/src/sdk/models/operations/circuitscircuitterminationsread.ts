import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTerminationsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTerminationsReadPathParams;
}


export class CircuitsCircuitTerminationsReadResponse extends SpeakeasyBase {
  @Metadata()
  circuitTermination?: shared.CircuitTermination;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
