import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitsCircuitTerminationsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTerminationsDeletePathParams;
}


export class CircuitsCircuitTerminationsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
