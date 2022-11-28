import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetJobsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetJobsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetJobsIdPathParams;
}


export class GetJobsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getJobsId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
