import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StreetsInAWardPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ward" })
  ward: string;
}


export class StreetsInAWardRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StreetsInAWardPathParams;
}


export class StreetsInAWardResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
