import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DistrictsInARegionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class DistrictsInARegionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DistrictsInARegionPathParams;
}


export class DistrictsInARegionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
