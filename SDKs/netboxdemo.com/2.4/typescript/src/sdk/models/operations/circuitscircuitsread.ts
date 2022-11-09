import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CircuitsCircuitsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitsReadPathParams;
}


export class CircuitsCircuitsReadResponse extends SpeakeasyBase {
  @Metadata()
  circuit?: shared.Circuit;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
