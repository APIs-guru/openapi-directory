import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMapsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetMapsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMapsUsingGetPathParams;
}


export class GetMapsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
