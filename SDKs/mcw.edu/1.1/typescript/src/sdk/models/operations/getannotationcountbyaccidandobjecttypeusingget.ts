import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=objectType" })
  objectType: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetAnnotationCountByAccIdAndObjectTypeUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationCountByAccIdAndObjectTypeUsingGetPathParams;
}


export class GetAnnotationCountByAccIdAndObjectTypeUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
