import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetHgncMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetHgncMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetHgncMappingUsingGetPathParams;
}


export class GetHgncMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
