import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Account identification requires an accountId, domain or both
**/
export declare class TrackJourneyEventRequestBodyIdentificationAccount extends SpeakeasyBase {
    accountId?: string;
    domain?: string;
}
/**
 * User identification requires a userId, email or both
**/
export declare class TrackJourneyEventRequestBodyIdentificationUser extends SpeakeasyBase {
    email?: string;
    userId?: string;
}
/**
 * Event identification requires a user, account or both
**/
export declare class TrackJourneyEventRequestBodyIdentification extends SpeakeasyBase {
    account?: TrackJourneyEventRequestBodyIdentificationAccount;
    user?: TrackJourneyEventRequestBodyIdentificationUser;
}
/**
 * Event for a user or an account
**/
export declare class TrackJourneyEventRequestBody extends SpeakeasyBase {
    identification: TrackJourneyEventRequestBodyIdentification;
    metadata?: Map<string, any>;
    name: string;
    triggeredAt?: string;
}
export declare class TrackJourneyEvent201ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent201ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent201ApplicationJsonMeta;
}
/**
 * All query-, header- and path- parameters that seemed incorrect
**/
export declare class TrackJourneyEvent400ApplicationJsonErrorsParameters extends SpeakeasyBase {
    header?: Map<string, string>;
    path?: Map<string, string>;
    query?: Map<string, string>;
}
/**
 * Map that sums up all received values that seemed incorrect
**/
export declare class TrackJourneyEvent400ApplicationJsonErrors extends SpeakeasyBase {
    fields?: Map<string, string>;
    parameters?: TrackJourneyEvent400ApplicationJsonErrorsParameters;
}
export declare class TrackJourneyEvent400ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent400ApplicationJson extends SpeakeasyBase {
    errors: TrackJourneyEvent400ApplicationJsonErrors;
    message: string;
    meta: TrackJourneyEvent400ApplicationJsonMeta;
}
export declare class TrackJourneyEvent401ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent401ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent401ApplicationJsonMeta;
}
export declare class TrackJourneyEvent403ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent403ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent403ApplicationJsonMeta;
}
export declare class TrackJourneyEvent429ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent429ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent429ApplicationJsonMeta;
}
export declare class TrackJourneyEvent500ApplicationJsonMeta extends SpeakeasyBase {
    requestId: string;
    status: number;
}
export declare class TrackJourneyEvent500ApplicationJson extends SpeakeasyBase {
    message: string;
    meta: TrackJourneyEvent500ApplicationJsonMeta;
}
export declare class TrackJourneyEventRequest extends SpeakeasyBase {
    request: TrackJourneyEventRequestBody;
}
export declare class TrackJourneyEventResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    trackJourneyEvent201ApplicationJsonObject?: TrackJourneyEvent201ApplicationJson;
    trackJourneyEvent400ApplicationJsonObject?: TrackJourneyEvent400ApplicationJson;
    trackJourneyEvent401ApplicationJsonObject?: TrackJourneyEvent401ApplicationJson;
    trackJourneyEvent403ApplicationJsonObject?: TrackJourneyEvent403ApplicationJson;
    trackJourneyEvent429ApplicationJsonObject?: TrackJourneyEvent429ApplicationJson;
    trackJourneyEvent500ApplicationJsonObject?: TrackJourneyEvent500ApplicationJson;
}
