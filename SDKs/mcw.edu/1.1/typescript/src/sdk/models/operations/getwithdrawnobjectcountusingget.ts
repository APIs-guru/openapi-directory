import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetWithdrawnObjectCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetWithdrawnObjectCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetWithdrawnObjectCountUsingGetPathParams;
}


export class GetWithdrawnObjectCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
