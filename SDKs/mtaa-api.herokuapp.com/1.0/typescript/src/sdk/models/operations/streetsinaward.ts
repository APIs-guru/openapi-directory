import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StreetsInAWardPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ward" })
  ward: string;
}


export class StreetsInAWardRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StreetsInAWardPathParams;
}


export class StreetsInAWardResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
