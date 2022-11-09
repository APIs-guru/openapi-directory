import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CircuitsProvidersDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CircuitsProvidersDeletePathParams;
}


export class CircuitsProvidersDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
