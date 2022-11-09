import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTypesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTypesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTypesReadPathParams;
}


export class CircuitsCircuitTypesReadResponse extends SpeakeasyBase {
  @Metadata()
  circuitType?: shared.CircuitType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
