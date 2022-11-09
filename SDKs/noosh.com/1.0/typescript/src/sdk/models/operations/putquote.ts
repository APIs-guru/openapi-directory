import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutQuotePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=quote_id" })
  quoteId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=workgroup_id" })
  workgroupId: string;
}


export class PutQuoteRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/xml" })
  applicationXml: Uint8Array;

  @Metadata({ data: "request, media_type=application/x-yaml" })
  applicationXYaml: Uint8Array;

  @Metadata({ data: "request, media_type=application/json" })
  quotePutPersistVo?: any;

  @Metadata({ data: "request, media_type=application/x-json-smile" })
  quotePutPersistVo1?: any;

  @Metadata({ data: "request, media_type=text/csv" })
  textCsv: Uint8Array;

  @Metadata({ data: "request, media_type=text/xml" })
  textXml: Uint8Array;

  @Metadata({ data: "request, media_type=text/x-yaml" })
  textXYaml: Uint8Array;
}


export class PutQuoteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutQuotePathParams;

  @Metadata()
  request?: PutQuoteRequests;
}


export class PutQuoteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  httpStatusVo?: any;

  @Metadata()
  statusCode: number;
}
