import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostInstancesIdReconstructPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdReconstructRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostInstancesIdReconstructPathParams;
}


export class PostInstancesIdReconstructResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
