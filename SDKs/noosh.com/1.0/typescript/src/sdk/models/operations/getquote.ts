import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQuotePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=quote_id" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class GetQuoteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQuotePathParams;
}


export class GetQuoteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  httpStatusVo?: any;

  @SpeakeasyMetadata()
  quoteExpandVo?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
