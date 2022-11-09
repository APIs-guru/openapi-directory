import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetProteinInteractionCountUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=dateYYYYMMDD" })
  dateYyyymmdd: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetProteinInteractionCountUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProteinInteractionCountUsingGetPathParams;
}


export class GetProteinInteractionCountUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
