import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQtlByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetQtlByRgdIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQtlByRgdIdUsingGetPathParams;
}


export class GetQtlByRgdIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
