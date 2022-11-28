import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostJobsIdResubmitPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostJobsIdResubmitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostJobsIdResubmitPathParams;
}


export class PostJobsIdResubmitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  postJobsIdResubmit200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
