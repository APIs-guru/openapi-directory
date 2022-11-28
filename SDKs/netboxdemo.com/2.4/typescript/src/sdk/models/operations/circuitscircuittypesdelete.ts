import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitsCircuitTypesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTypesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitTypesDeletePathParams;
}


export class CircuitsCircuitTypesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
