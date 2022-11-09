import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectsWithXdBsDiffUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectKey" })
  objectKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithXdBsDiffUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectsWithXdBsDiffUsingGetPathParams;
}


export class GetObjectsWithXdBsDiffUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
