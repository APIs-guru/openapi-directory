import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationsByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetAnnotationsByRgdIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationsByRgdIdUsingGetPathParams;
}


export class GetAnnotationsByRgdIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
