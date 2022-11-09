import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TrackJourneyEventRequestBodyIdentificationAccount
/** 
 * Account identification requires an accountId, domain or both
**/
export class TrackJourneyEventRequestBodyIdentificationAccount extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;
}


// TrackJourneyEventRequestBodyIdentificationUser
/** 
 * User identification requires a userId, email or both
**/
export class TrackJourneyEventRequestBodyIdentificationUser extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}


// TrackJourneyEventRequestBodyIdentification
/** 
 * Event identification requires a user, account or both
**/
export class TrackJourneyEventRequestBodyIdentification extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: TrackJourneyEventRequestBodyIdentificationAccount;

  @Metadata({ data: "json, name=user" })
  user?: TrackJourneyEventRequestBodyIdentificationUser;
}


// TrackJourneyEventRequestBody
/** 
 * Event for a user or an account
**/
export class TrackJourneyEventRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identification" })
  identification: TrackJourneyEventRequestBodyIdentification;

  @Metadata({ data: "json, name=metadata" })
  metadata?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=triggeredAt" })
  triggeredAt?: string;
}


export class TrackJourneyEventRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: TrackJourneyEventRequestBody;
}


export class TrackJourneyEvent201ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent201ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent201ApplicationJsonMeta;
}


// TrackJourneyEvent400ApplicationJsonErrorsParameters
/** 
 * All query-, header- and path- parameters that seemed incorrect
**/
export class TrackJourneyEvent400ApplicationJsonErrorsParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: Map<string, string>;

  @Metadata({ data: "json, name=path" })
  path?: Map<string, string>;

  @Metadata({ data: "json, name=query" })
  query?: Map<string, string>;
}


// TrackJourneyEvent400ApplicationJsonErrors
/** 
 * Map that sums up all received values that seemed incorrect
**/
export class TrackJourneyEvent400ApplicationJsonErrors extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, string>;

  @Metadata({ data: "json, name=parameters" })
  parameters?: TrackJourneyEvent400ApplicationJsonErrorsParameters;
}


export class TrackJourneyEvent400ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent400ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors" })
  errors: TrackJourneyEvent400ApplicationJsonErrors;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent400ApplicationJsonMeta;
}


export class TrackJourneyEvent401ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent401ApplicationJsonMeta;
}


export class TrackJourneyEvent403ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent403ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent403ApplicationJsonMeta;
}


export class TrackJourneyEvent429ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent429ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent429ApplicationJsonMeta;
}


export class TrackJourneyEvent500ApplicationJsonMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=requestId" })
  requestId: string;

  @Metadata({ data: "json, name=status" })
  status: number;
}


export class TrackJourneyEvent500ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=meta" })
  meta: TrackJourneyEvent500ApplicationJsonMeta;
}


export class TrackJourneyEventResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  trackJourneyEvent201ApplicationJsonObject?: TrackJourneyEvent201ApplicationJson;

  @Metadata()
  trackJourneyEvent400ApplicationJsonObject?: TrackJourneyEvent400ApplicationJson;

  @Metadata()
  trackJourneyEvent401ApplicationJsonObject?: TrackJourneyEvent401ApplicationJson;

  @Metadata()
  trackJourneyEvent403ApplicationJsonObject?: TrackJourneyEvent403ApplicationJson;

  @Metadata()
  trackJourneyEvent429ApplicationJsonObject?: TrackJourneyEvent429ApplicationJson;

  @Metadata()
  trackJourneyEvent500ApplicationJsonObject?: TrackJourneyEvent500ApplicationJson;
}
