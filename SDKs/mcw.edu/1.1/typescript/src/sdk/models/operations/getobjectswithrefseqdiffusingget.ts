import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObjectsWithRefSeqDiffUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithRefSeqDiffUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObjectsWithRefSeqDiffUsingGetPathParams;
}


export class GetObjectsWithRefSeqDiffUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
