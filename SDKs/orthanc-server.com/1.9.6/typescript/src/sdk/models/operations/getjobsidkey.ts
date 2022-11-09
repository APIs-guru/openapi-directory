import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetJobsIdKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=key" })
  key: string;
}


export class GetJobsIdKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetJobsIdKeyPathParams;
}


export class GetJobsIdKeyResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
