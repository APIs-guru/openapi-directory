import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProteinInteractionDiffUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateFromYYYYMMDD" })
  dateFromYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateToYYYYMMDD" })
  dateToYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetProteinInteractionDiffUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProteinInteractionDiffUsingGetPathParams;
}


export class GetProteinInteractionDiffUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
