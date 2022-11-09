import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRetiredObjectCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetRetiredObjectCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRetiredObjectCountUsingGetPathParams;
}


export class GetRetiredObjectCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
