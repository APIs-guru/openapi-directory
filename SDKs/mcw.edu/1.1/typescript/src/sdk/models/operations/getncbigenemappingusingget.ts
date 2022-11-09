import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetNcbiGeneMappingUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetNcbiGeneMappingUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetNcbiGeneMappingUsingGetPathParams;
}


export class GetNcbiGeneMappingUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
