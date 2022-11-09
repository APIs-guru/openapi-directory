import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=quote_id" })
  quoteId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuotePathParams;
}


export class GetQuoteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  quoteExpandVo?: any;

  @Metadata()
  statusCode: number;
}
