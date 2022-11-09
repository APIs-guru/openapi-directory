import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitsCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuit;
}


export class CircuitsCircuitsCreateResponse extends SpeakeasyBase {
  @Metadata()
  circuit?: shared.Circuit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
