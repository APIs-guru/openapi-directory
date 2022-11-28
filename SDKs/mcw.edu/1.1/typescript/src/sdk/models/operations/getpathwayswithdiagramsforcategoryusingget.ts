import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPathwaysWithDiagramsForCategoryUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;
}


export class GetPathwaysWithDiagramsForCategoryUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPathwaysWithDiagramsForCategoryUsingGetPathParams;
}


export class GetPathwaysWithDiagramsForCategoryUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
