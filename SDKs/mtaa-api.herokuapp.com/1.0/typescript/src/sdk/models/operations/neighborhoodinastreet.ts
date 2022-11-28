import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NeighborhoodInAStreetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=country" })
  country: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=district" })
  district: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=street" })
  street: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ward" })
  ward: string;
}


export class NeighborhoodInAStreetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: NeighborhoodInAStreetPathParams;
}


export class NeighborhoodInAStreetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
