import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuit;
}


export class CircuitsCircuitsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuit?: shared.Circuit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
