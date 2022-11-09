import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActiveObjectCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetActiveObjectCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetActiveObjectCountUsingGetPathParams;
}


export class GetActiveObjectCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
