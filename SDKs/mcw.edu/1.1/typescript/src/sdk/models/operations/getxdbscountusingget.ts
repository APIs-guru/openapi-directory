import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetXdbsCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetXdbsCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetXdbsCountUsingGetPathParams;
}


export class GetXdbsCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
