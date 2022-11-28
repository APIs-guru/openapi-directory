import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TanzaniaRegionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;
}


export class TanzaniaRegionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TanzaniaRegionsPathParams;
}


export class TanzaniaRegionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
