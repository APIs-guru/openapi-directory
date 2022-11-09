import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostStudiesIdReconstructPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdReconstructRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostStudiesIdReconstructPathParams;
}


export class PostStudiesIdReconstructResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
