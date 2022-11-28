import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WardsInADistrictPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class WardsInADistrictRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WardsInADistrictPathParams;
}


export class WardsInADistrictResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
