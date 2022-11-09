import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectsWithRefSeqCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithRefSeqCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectsWithRefSeqCountUsingGetPathParams;
}


export class GetObjectsWithRefSeqCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
