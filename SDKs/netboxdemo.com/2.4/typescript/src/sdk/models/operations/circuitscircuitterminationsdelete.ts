import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitsCircuitTerminationsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTerminationsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitTerminationsDeletePathParams;
}


export class CircuitsCircuitTerminationsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
