import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostSeriesIdReconstructPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostSeriesIdReconstructRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSeriesIdReconstructPathParams;
}


export class PostSeriesIdReconstructResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
