import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitsCircuitsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitsDeletePathParams;
}


export class CircuitsCircuitsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
