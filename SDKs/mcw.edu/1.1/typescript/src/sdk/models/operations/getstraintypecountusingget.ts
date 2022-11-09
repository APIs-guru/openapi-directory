import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStrainTypeCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetStrainTypeCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStrainTypeCountUsingGetPathParams;
}


export class GetStrainTypeCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
