import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTypesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTypesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTypesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CircuitType;
}


export class CircuitsCircuitTypesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuitType?: shared.CircuitType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
