import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetObjectsWithXdBsCountUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectKey" })
  objectKey: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetObjectsWithXdBsCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetObjectsWithXdBsCountUsingGetPathParams;
}


export class GetObjectsWithXdBsCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
