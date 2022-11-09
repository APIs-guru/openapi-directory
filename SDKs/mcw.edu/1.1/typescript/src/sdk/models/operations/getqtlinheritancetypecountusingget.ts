import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQtlInheritanceTypeCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetQtlInheritanceTypeCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQtlInheritanceTypeCountUsingGetPathParams;
}


export class GetQtlInheritanceTypeCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
