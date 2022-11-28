import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeneTypeCountUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGeneTypeCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeneTypeCountUsingGetPathParams;
}


export class GetGeneTypeCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
