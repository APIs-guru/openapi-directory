import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationsByRgdIdAndOntologyUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ontologyPrefix" })
  ontologyPrefix: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetAnnotationsByRgdIdAndOntologyUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationsByRgdIdAndOntologyUsingGetPathParams;
}


export class GetAnnotationsByRgdIdAndOntologyUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
