import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationsByAccIdAndRgdIdUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetAnnotationsByAccIdAndRgdIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationsByAccIdAndRgdIdUsingGetPathParams;
}


export class GetAnnotationsByAccIdAndRgdIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
