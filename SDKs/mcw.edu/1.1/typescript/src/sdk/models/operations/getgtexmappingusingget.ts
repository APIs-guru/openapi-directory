import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGtexMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGtexMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGtexMappingUsingGetPathParams;
}


export class GetGtexMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
