import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetMgiMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetMgiMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMgiMappingUsingGetPathParams;
}


export class GetMgiMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
