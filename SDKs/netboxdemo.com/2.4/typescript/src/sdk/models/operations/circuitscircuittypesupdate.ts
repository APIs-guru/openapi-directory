import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTypesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTypesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTypesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CircuitType;
}


export class CircuitsCircuitTypesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuitType?: shared.CircuitType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
