import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStrainTypeDiffUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetStrainTypeDiffUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStrainTypeDiffUsingGetPathParams;
}


export class GetStrainTypeDiffUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
