import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpsertUserRequestBodyIdentification
/** 
 * User identification requires a userId, email or both
**/
export class UpsertUserRequestBodyIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


// UpsertUserRequestBody
/** 
 * Update properties of a user
**/
export class UpsertUserRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identification" })
  identification: UpsertUserRequestBodyIdentification;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>;
}


export class UpsertUserRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: UpsertUserRequestBody;
}


export class UpsertUser201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser201ApplicationJsonMeta;
}


// UpsertUser400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class UpsertUser400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// UpsertUser400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class UpsertUser400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: UpsertUser400ApplicationJsonErrorsParameters;
}


export class UpsertUser400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: UpsertUser400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser400ApplicationJsonMeta;
}


export class UpsertUser401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser401ApplicationJsonMeta;
}


export class UpsertUser403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser403ApplicationJsonMeta;
}


export class UpsertUser429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser429ApplicationJsonMeta;
}


export class UpsertUser500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertUser500ApplicationJsonMeta;
}


export class UpsertUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  upsertUser201ApplicationJsonObject?: UpsertUser201ApplicationJson;

  @Metadata()
  upsertUser400ApplicationJsonObject?: UpsertUser400ApplicationJson;

  @Metadata()
  upsertUser401ApplicationJsonObject?: UpsertUser401ApplicationJson;

  @Metadata()
  upsertUser403ApplicationJsonObject?: UpsertUser403ApplicationJson;

  @Metadata()
  upsertUser429ApplicationJsonObject?: UpsertUser429ApplicationJson;

  @Metadata()
  upsertUser500ApplicationJsonObject?: UpsertUser500ApplicationJson;
}
