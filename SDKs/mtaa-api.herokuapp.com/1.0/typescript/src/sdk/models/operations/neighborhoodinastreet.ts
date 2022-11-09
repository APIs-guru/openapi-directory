import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NeighborhoodInAStreetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=street" })
  street: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=ward" })
  ward: string;
}


export class NeighborhoodInAStreetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: NeighborhoodInAStreetPathParams;
}


export class NeighborhoodInAStreetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
