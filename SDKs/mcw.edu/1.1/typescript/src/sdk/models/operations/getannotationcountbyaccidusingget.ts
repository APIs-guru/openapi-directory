import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationCountByAccIdUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;
}


export class GetAnnotationCountByAccIdUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationCountByAccIdUsingGetPathParams;
}


export class GetAnnotationCountByAccIdUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
