import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationsByAccIdAndRgdIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetAnnotationsByAccIdAndRgdIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationsByAccIdAndRgdIdUsingGetPathParams;
}


export class GetAnnotationsByAccIdAndRgdIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
