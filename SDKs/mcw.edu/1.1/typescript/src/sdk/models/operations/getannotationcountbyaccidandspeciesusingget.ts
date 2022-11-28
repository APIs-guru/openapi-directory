import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetAnnotationCountByAccIdAndSpeciesUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams;
}


export class GetAnnotationCountByAccIdAndSpeciesUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
