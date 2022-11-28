import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostInstancesIdReconstructPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostInstancesIdReconstructRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostInstancesIdReconstructPathParams;
}


export class PostInstancesIdReconstructResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
