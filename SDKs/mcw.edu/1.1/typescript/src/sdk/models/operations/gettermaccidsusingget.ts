import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTermAccIdsUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetTermAccIdsUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTermAccIdsUsingGetPathParams;
}


export class GetTermAccIdsUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
