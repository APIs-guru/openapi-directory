import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitsCircuitsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitsDeletePathParams;
}


export class CircuitsCircuitsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
