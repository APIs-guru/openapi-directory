import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoveUserFromAccountPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


// RemoveUserFromAccountRequestBody
/** 
 * The user being added/removed from the account
**/
export class RemoveUserFromAccountRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId: string;
}


export class RemoveUserFromAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount201ApplicationJsonMeta;
}


// RemoveUserFromAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// RemoveUserFromAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class RemoveUserFromAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: RemoveUserFromAccount400ApplicationJsonErrorsParameters;
}


export class RemoveUserFromAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: RemoveUserFromAccount400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount400ApplicationJsonMeta;
}


export class RemoveUserFromAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount401ApplicationJsonMeta;
}


export class RemoveUserFromAccount403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount403ApplicationJsonMeta;
}


export class RemoveUserFromAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount429ApplicationJsonMeta;
}


export class RemoveUserFromAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class RemoveUserFromAccount500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: RemoveUserFromAccount500ApplicationJsonMeta;
}


export class RemoveUserFromAccountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveUserFromAccountPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemoveUserFromAccountRequestBody;
}


export class RemoveUserFromAccountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  removeUserFromAccount201ApplicationJsonObject?: RemoveUserFromAccount201ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount400ApplicationJsonObject?: RemoveUserFromAccount400ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount401ApplicationJsonObject?: RemoveUserFromAccount401ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount403ApplicationJsonObject?: RemoveUserFromAccount403ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount429ApplicationJsonObject?: RemoveUserFromAccount429ApplicationJson;

  @SpeakeasyMetadata()
  removeUserFromAccount500ApplicationJsonObject?: RemoveUserFromAccount500ApplicationJson;
}
