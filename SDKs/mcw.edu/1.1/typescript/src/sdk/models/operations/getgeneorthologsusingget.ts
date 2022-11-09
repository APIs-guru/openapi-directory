import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGeneOrthologsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGeneOrthologsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGeneOrthologsUsingGetPathParams;
}


export class GetGeneOrthologsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
