import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostStudiesIdSplitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostStudiesIdSplitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostStudiesIdSplitPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;
}


export class PostStudiesIdSplitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postStudiesIdSplit200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
