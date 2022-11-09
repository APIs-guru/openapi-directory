import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetObjectsWithReferenceCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithReferenceCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetObjectsWithReferenceCountUsingGetPathParams;
}


export class GetObjectsWithReferenceCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
