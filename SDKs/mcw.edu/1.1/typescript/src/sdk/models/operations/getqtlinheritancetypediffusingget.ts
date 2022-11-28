import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQtlInheritanceTypeDiffUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetQtlInheritanceTypeDiffUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQtlInheritanceTypeDiffUsingGetPathParams;
}


export class GetQtlInheritanceTypeDiffUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
