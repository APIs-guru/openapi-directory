import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitTerminationsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitTerminationsReadPathParams;
}


export class CircuitsCircuitTerminationsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuitTermination?: shared.CircuitTermination;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
