import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UpsertUserRequestBodyIdentification
/** 
 * User identification requires a userId, email or both
**/
export class UpsertUserRequestBodyIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// UpsertUserRequestBody
/** 
 * Update properties of a user
**/
export class UpsertUserRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identification" })
  identification: UpsertUserRequestBodyIdentification;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, any>;
}


export class UpsertUser201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser201ApplicationJsonMeta;
}


// UpsertUser400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class UpsertUser400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// UpsertUser400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class UpsertUser400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: UpsertUser400ApplicationJsonErrorsParameters;
}


export class UpsertUser400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: UpsertUser400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser400ApplicationJsonMeta;
}


export class UpsertUser401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser401ApplicationJsonMeta;
}


export class UpsertUser403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser403ApplicationJsonMeta;
}


export class UpsertUser429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser429ApplicationJsonMeta;
}


export class UpsertUser500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class UpsertUser500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: UpsertUser500ApplicationJsonMeta;
}


export class UpsertUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: UpsertUserRequestBody;
}


export class UpsertUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  upsertUser201ApplicationJsonObject?: UpsertUser201ApplicationJson;

  @SpeakeasyMetadata()
  upsertUser400ApplicationJsonObject?: UpsertUser400ApplicationJson;

  @SpeakeasyMetadata()
  upsertUser401ApplicationJsonObject?: UpsertUser401ApplicationJson;

  @SpeakeasyMetadata()
  upsertUser403ApplicationJsonObject?: UpsertUser403ApplicationJson;

  @SpeakeasyMetadata()
  upsertUser429ApplicationJsonObject?: UpsertUser429ApplicationJson;

  @SpeakeasyMetadata()
  upsertUser500ApplicationJsonObject?: UpsertUser500ApplicationJson;
}
