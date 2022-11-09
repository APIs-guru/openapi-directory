import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemoveUserFromAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// RemoveUserFromAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class RemoveUserFromAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveUserFromAccountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: RemoveUserFromAccountRequestBody;
}


export class RemoveUserFromAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount201ApplicationJsonMeta;
}


// RemoveUserFromAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// RemoveUserFromAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}


export class RemoveUserFromAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: RemoveUserFromAccount400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount400ApplicationJsonMeta;
}


export class RemoveUserFromAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount401ApplicationJsonMeta;
}


export class RemoveUserFromAccount403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount403ApplicationJsonMeta;
}


export class RemoveUserFromAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount429ApplicationJsonMeta;
}


export class RemoveUserFromAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount500ApplicationJsonMeta;
}


export class RemoveUserFromAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeUserFromAccount201ApplicationJsonObject?: RemoveUserFromAccount201ApplicationJson;

  @Metadata()
  removeUserFromAccount400ApplicationJsonObject?: RemoveUserFromAccount400ApplicationJson;

  @Metadata()
  removeUserFromAccount401ApplicationJsonObject?: RemoveUserFromAccount401ApplicationJson;

  @Metadata()
  removeUserFromAccount403ApplicationJsonObject?: RemoveUserFromAccount403ApplicationJson;

  @Metadata()
  removeUserFromAccount429ApplicationJsonObject?: RemoveUserFromAccount429ApplicationJson;

  @Metadata()
  removeUserFromAccount500ApplicationJsonObject?: RemoveUserFromAccount500ApplicationJson;
}
