import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWithdrawnObjectCountUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetWithdrawnObjectCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWithdrawnObjectCountUsingGetPathParams;
}


export class GetWithdrawnObjectCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
