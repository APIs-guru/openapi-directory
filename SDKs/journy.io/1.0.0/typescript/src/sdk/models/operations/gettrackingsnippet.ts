import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTrackingSnippetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=domain" })
  domain: string;
}


export class GetTrackingSnippetRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTrackingSnippetQueryParams;
}


// GetTrackingSnippet200ApplicationJsonData
/** 
 * A snippet
**/
export class GetTrackingSnippet200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=snippet" })
  snippet: string;
}


export class GetTrackingSnippet200ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: GetTrackingSnippet200ApplicationJsonData;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet200ApplicationJsonMeta;
}


// GetTrackingSnippet400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class GetTrackingSnippet400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// GetTrackingSnippet400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class GetTrackingSnippet400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: GetTrackingSnippet400ApplicationJsonErrorsParameters;
}


export class GetTrackingSnippet400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: GetTrackingSnippet400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet400ApplicationJsonMeta;
}


export class GetTrackingSnippet401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet401ApplicationJsonMeta;
}


export class GetTrackingSnippet403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet403ApplicationJsonMeta;
}


export class GetTrackingSnippet404ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet404ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet404ApplicationJsonMeta;
}


export class GetTrackingSnippet429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet429ApplicationJsonMeta;
}


export class GetTrackingSnippet500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class GetTrackingSnippet500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: GetTrackingSnippet500ApplicationJsonMeta;
}


export class GetTrackingSnippetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTrackingSnippet200ApplicationJsonObject?: GetTrackingSnippet200ApplicationJson;

  @Metadata()
  getTrackingSnippet400ApplicationJsonObject?: GetTrackingSnippet400ApplicationJson;

  @Metadata()
  getTrackingSnippet401ApplicationJsonObject?: GetTrackingSnippet401ApplicationJson;

  @Metadata()
  getTrackingSnippet403ApplicationJsonObject?: GetTrackingSnippet403ApplicationJson;

  @Metadata()
  getTrackingSnippet404ApplicationJsonObject?: GetTrackingSnippet404ApplicationJson;

  @Metadata()
  getTrackingSnippet429ApplicationJsonObject?: GetTrackingSnippet429ApplicationJson;

  @Metadata()
  getTrackingSnippet500ApplicationJsonObject?: GetTrackingSnippet500ApplicationJson;
}
