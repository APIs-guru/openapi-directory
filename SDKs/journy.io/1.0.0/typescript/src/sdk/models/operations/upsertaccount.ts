import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// UpsertAccountRequestBodyIdentification
/** 
 * Account identification requires an accountId, domain or both
**/
export class UpsertAccountRequestBodyIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;
}


// UpsertAccountRequestBodyMembersIdentification
/** 
 * User identification requires a userId, email or both
**/
export class UpsertAccountRequestBodyMembersIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


// UpsertAccountRequestBodyMembers
/** 
 * Identification requires an accountId, domain or both
**/
export class UpsertAccountRequestBodyMembers extends SpeakeasyBase {
  @Metadata({ data: "json, name=identification" })
  identification: UpsertAccountRequestBodyMembersIdentification;
}


// UpsertAccountRequestBody
/** 
 * Update properties and/or members of an account
**/
export class UpsertAccountRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identification" })
  identification: UpsertAccountRequestBodyIdentification;

  @Metadata({ data: "json, name=members", elemType: operations.UpsertAccountRequestBodyMembers })
  members?: UpsertAccountRequestBodyMembers[];

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, any>;
}


export class UpsertAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: UpsertAccountRequestBody;
}


export class UpsertAccount201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertAccount201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertAccount201ApplicationJsonMeta;
}


// UpsertAccount400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class UpsertAccount400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// UpsertAccount400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class UpsertAccount400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: UpsertAccount400ApplicationJsonErrorsParameters;
}


export class UpsertAccount400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertAccount400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: UpsertAccount400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertAccount400ApplicationJsonMeta;
}


export class UpsertAccount401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertAccount401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertAccount401ApplicationJsonMeta;
}


export class UpsertAccount429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertAccount429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertAccount429ApplicationJsonMeta;
}


export class UpsertAccount500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class UpsertAccount500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: UpsertAccount500ApplicationJsonMeta;
}


export class UpsertAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  upsertAccount201ApplicationJsonObject?: UpsertAccount201ApplicationJson;

  @Metadata()
  upsertAccount400ApplicationJsonObject?: UpsertAccount400ApplicationJson;

  @Metadata()
  upsertAccount401ApplicationJsonObject?: UpsertAccount401ApplicationJson;

  @Metadata()
  upsertAccount429ApplicationJsonObject?: UpsertAccount429ApplicationJson;

  @Metadata()
  upsertAccount500ApplicationJsonObject?: UpsertAccount500ApplicationJson;
}
