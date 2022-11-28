import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkRequestBodyIdentification
/** 
 * User identification requires a userId, email or both
**/
export class LinkRequestBodyIdentification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}


// LinkRequestBody
/** 
 * Link web activity to user
**/
export class LinkRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deviceId" })
  deviceId: string;

  @SpeakeasyMetadata({ data: "json, name=identification" })
  identification: LinkRequestBodyIdentification;
}


export class Link201ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link201ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link201ApplicationJsonMeta;
}


// Link400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class Link400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// Link400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class Link400ApplicationJsonErrors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Link400ApplicationJsonErrorsParameters;
}


export class Link400ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link400ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors: Link400ApplicationJsonErrors;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link400ApplicationJsonMeta;
}


export class Link401ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link401ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link401ApplicationJsonMeta;
}


export class Link403ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link403ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link403ApplicationJsonMeta;
}


export class Link429ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link429ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link429ApplicationJsonMeta;
}


export class Link500ApplicationJsonMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: number;
}


export class Link500ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta: Link500ApplicationJsonMeta;
}


export class LinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: LinkRequestBody;
}


export class LinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  link201ApplicationJsonObject?: Link201ApplicationJson;

  @SpeakeasyMetadata()
  link400ApplicationJsonObject?: Link400ApplicationJson;

  @SpeakeasyMetadata()
  link401ApplicationJsonObject?: Link401ApplicationJson;

  @SpeakeasyMetadata()
  link403ApplicationJsonObject?: Link403ApplicationJson;

  @SpeakeasyMetadata()
  link429ApplicationJsonObject?: Link429ApplicationJson;

  @SpeakeasyMetadata()
  link500ApplicationJsonObject?: Link500ApplicationJson;
}
