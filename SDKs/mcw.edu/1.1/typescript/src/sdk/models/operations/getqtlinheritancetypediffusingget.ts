import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQtlInheritanceTypeDiffUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetQtlInheritanceTypeDiffUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQtlInheritanceTypeDiffUsingGetPathParams;
}


export class GetQtlInheritanceTypeDiffUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
