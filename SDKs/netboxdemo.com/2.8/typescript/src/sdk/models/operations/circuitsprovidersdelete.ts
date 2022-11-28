import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitsProvidersDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class CircuitsProvidersDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CircuitsProvidersDeletePathParams;
}


export class CircuitsProvidersDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
