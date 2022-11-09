import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WardsInADistrictPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;
}


export class WardsInADistrictRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WardsInADistrictPathParams;
}


export class WardsInADistrictResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
