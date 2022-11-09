import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPathwaysWithDiagramsForCategoryUsingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetPathwaysWithDiagramsForCategoryUsingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPathwaysWithDiagramsForCategoryUsingGetPathParams;
}


export class GetPathwaysWithDiagramsForCategoryUsingGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
