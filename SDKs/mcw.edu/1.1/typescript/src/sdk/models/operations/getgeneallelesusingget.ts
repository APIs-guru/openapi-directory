import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneAllelesUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGeneAllelesUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneAllelesUsingGetPathParams;
}


export class GetGeneAllelesUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
