import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQtlInheritanceTypeCountUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetQtlInheritanceTypeCountUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQtlInheritanceTypeCountUsingGetPathParams;
}


export class GetQtlInheritanceTypeCountUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
