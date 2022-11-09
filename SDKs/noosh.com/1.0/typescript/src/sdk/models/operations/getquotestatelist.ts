import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetQuoteStateListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteStateListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetQuoteStateListPathParams;
}


export class GetQuoteStateListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  objectStateListVo?: any;

  @Metadata()
  statusCode: number;
}
