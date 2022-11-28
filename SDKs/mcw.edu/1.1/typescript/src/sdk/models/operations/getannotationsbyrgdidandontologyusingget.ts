import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationsByRgdIdAndOntologyUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ontologyPrefix" })
  ontologyPrefix: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetAnnotationsByRgdIdAndOntologyUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationsByRgdIdAndOntologyUsingGetPathParams;
}


export class GetAnnotationsByRgdIdAndOntologyUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
