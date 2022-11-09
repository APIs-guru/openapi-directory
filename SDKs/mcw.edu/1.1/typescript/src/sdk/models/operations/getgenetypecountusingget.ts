import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneTypeCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetGeneTypeCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneTypeCountUsingGetPathParams;
}


export class GetGeneTypeCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
