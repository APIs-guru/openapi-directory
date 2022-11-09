import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableCircuit;
}


export class CircuitsCircuitsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  circuit?: shared.Circuit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
