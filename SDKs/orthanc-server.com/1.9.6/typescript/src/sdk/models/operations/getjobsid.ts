import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetJobsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJobsIdPathParams;
}


export class GetJobsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getJobsId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
