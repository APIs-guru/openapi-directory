import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitTypesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CircuitType;
}


export class CircuitsCircuitTypesCreateResponse extends SpeakeasyBase {
  @Metadata()
  circuitType?: shared.CircuitType;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
