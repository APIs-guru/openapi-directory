import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActiveObjectDiffUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetActiveObjectDiffUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetActiveObjectDiffUsingGetPathParams;
}


export class GetActiveObjectDiffUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
