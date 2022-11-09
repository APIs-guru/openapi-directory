import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accId" })
  accId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=includeChildren" })
  includeChildren: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetAnnotationCountByAccIdAndSpeciesUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAnnotationCountByAccIdAndSpeciesUsingGetPathParams;
}


export class GetAnnotationCountByAccIdAndSpeciesUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
