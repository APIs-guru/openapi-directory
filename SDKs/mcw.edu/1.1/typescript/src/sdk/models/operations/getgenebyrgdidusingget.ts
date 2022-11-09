import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGeneByRgdIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneByRgdIdUsingGetPathParams;
}


export class GetGeneByRgdIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
