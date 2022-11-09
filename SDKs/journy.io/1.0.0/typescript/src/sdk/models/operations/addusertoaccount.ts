import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddUserToAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AddUserToAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class AddUserToAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=userId" })
  userId: string;
}


export class AddUserToAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddUserToAccountPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: AddUserToAccountRequestBody;
}


export class AddUserToAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: AddUserToAccount201ApplicationJsonMeta;
}


// AddUserToAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// AddUserToAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: AddUserToAccount400ApplicationJsonErrorsParameters;
}


export class AddUserToAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: AddUserToAccount400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: AddUserToAccount400ApplicationJsonMeta;
}


export class AddUserToAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: AddUserToAccount401ApplicationJsonMeta;
}


export class AddUserToAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: AddUserToAccount429ApplicationJsonMeta;
}


export class AddUserToAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: AddUserToAccount500ApplicationJsonMeta;
}


export class AddUserToAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  addUserToAccount201ApplicationJsonObject?: AddUserToAccount201ApplicationJson;

  @Metadata()
  addUserToAccount400ApplicationJsonObject?: AddUserToAccount400ApplicationJson;

  @Metadata()
  addUserToAccount401ApplicationJsonObject?: AddUserToAccount401ApplicationJson;

  @Metadata()
  addUserToAccount429ApplicationJsonObject?: AddUserToAccount429ApplicationJson;

  @Metadata()
  addUserToAccount500ApplicationJsonObject?: AddUserToAccount500ApplicationJson;
}
