import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkRequestBodyIdentification
/** 
 * User identification requires a userId, email or both
**/
export class LinkRequestBodyIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


// LinkRequestBody
/** 
 * Link web activity to user
**/
export class LinkRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=deviceId" })
  deviceId: string;

  @Metadata({ data: "json, name=identification" })
  identification: LinkRequestBodyIdentification;
}


export class LinkRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: LinkRequestBody;
}


export class Link201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link201ApplicationJsonMeta;
}


// Link400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class Link400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// Link400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class Link400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Link400ApplicationJsonErrorsParameters;
}


export class Link400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: Link400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link400ApplicationJsonMeta;
}


export class Link401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link401ApplicationJsonMeta;
}


export class Link403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link403ApplicationJsonMeta;
}


export class Link429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link429ApplicationJsonMeta;
}


export class Link500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class Link500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: Link500ApplicationJsonMeta;
}


export class LinkResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  link201ApplicationJsonObject?: Link201ApplicationJson;

  @Metadata()
  link400ApplicationJsonObject?: Link400ApplicationJson;

  @Metadata()
  link401ApplicationJsonObject?: Link401ApplicationJson;

  @Metadata()
  link403ApplicationJsonObject?: Link403ApplicationJson;

  @Metadata()
  link429ApplicationJsonObject?: Link429ApplicationJson;

  @Metadata()
  link500ApplicationJsonObject?: Link500ApplicationJson;
}
