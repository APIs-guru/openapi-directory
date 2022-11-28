import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CircuitsCircuitsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsCircuitsReadPathParams;
}


export class CircuitsCircuitsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  circuit?: shared.Circuit;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
