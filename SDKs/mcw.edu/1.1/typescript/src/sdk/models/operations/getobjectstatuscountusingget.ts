import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectStatusCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectStatusCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectStatusCountUsingGetPathParams;
}


export class GetObjectStatusCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
