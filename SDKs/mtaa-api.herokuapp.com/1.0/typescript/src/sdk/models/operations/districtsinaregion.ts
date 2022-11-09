import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DistrictsInARegionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class DistrictsInARegionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DistrictsInARegionPathParams;
}


export class DistrictsInARegionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
