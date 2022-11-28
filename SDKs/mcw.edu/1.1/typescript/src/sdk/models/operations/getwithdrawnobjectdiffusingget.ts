import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetWithdrawnObjectDiffUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetWithdrawnObjectDiffUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetWithdrawnObjectDiffUsingGetPathParams;
}


export class GetWithdrawnObjectDiffUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
