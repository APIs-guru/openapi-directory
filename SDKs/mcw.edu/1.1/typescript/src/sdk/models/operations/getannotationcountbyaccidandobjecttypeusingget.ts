import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=objectType" })
  objectType: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetAnnotationCountByAccIdAndObjectTypeUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams;
}


export class GetAnnotationCountByAccIdAndObjectTypeUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
