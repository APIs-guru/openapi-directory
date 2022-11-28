import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAnnotationCountByAccIdUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;
}


export class GetAnnotationCountByAccIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnnotationCountByAccIdUsingGetPathParams;
}


export class GetAnnotationCountByAccIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
