import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectsWithXdBsCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectKey" })
  objectKey: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithXdBsCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectsWithXdBsCountUsingGetPathParams;
}


export class GetObjectsWithXdBsCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
