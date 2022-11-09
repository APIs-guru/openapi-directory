import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectStatusDiffUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectStatusDiffUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectStatusDiffUsingGetPathParams;
}


export class GetObjectStatusDiffUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
