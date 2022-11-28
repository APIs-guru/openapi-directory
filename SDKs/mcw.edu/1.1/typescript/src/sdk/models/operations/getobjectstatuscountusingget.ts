import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObjectStatusCountUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectStatusCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObjectStatusCountUsingGetPathParams;
}


export class GetObjectStatusCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
