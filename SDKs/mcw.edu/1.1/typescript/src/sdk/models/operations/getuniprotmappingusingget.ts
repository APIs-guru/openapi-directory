import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetUniProtMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetUniProtMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUniProtMappingUsingGetPathParams;
}


export class GetUniProtMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
