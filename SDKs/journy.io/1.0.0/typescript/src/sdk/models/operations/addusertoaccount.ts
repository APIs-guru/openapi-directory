import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddUserToAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// AddUserToAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class AddUserToAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class AddUserToAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount201ApplicationJsonMeta;
}


// AddUserToAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// AddUserToAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class AddUserToAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: AddUserToAccount400ApplicationJsonErrorsParameters;
}


export class AddUserToAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: AddUserToAccount400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount400ApplicationJsonMeta;
}


export class AddUserToAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount401ApplicationJsonMeta;
}


export class AddUserToAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount429ApplicationJsonMeta;
}


export class AddUserToAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class AddUserToAccount500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: AddUserToAccount500ApplicationJsonMeta;
}


export class AddUserToAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddUserToAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: AddUserToAccountRequestBody;
}


export class AddUserToAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  addUserToAccount201ApplicationJsonObject?: AddUserToAccount201ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount400ApplicationJsonObject?: AddUserToAccount400ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount401ApplicationJsonObject?: AddUserToAccount401ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount429ApplicationJsonObject?: AddUserToAccount429ApplicationJson;

  @SpeakeasyMetadata()
  addUserToAccount500ApplicationJsonObject?: AddUserToAccount500ApplicationJson;
}
