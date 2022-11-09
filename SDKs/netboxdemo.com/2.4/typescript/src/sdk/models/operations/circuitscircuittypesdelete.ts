import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitsCircuitTypesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsCircuitTypesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsCircuitTypesDeletePathParams;
}


export class CircuitsCircuitTypesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
