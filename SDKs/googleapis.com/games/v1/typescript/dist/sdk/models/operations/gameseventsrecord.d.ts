import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GamesEventsRecordQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    language?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class GamesEventsRecordSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class GamesEventsRecordRequest extends SpeakeasyBase {
    queryParams: GamesEventsRecordQueryParams;
    request?: shared.EventRecordRequest;
    security: GamesEventsRecordSecurity;
}
export declare class GamesEventsRecordResponse extends SpeakeasyBase {
    contentType: string;
    eventUpdateResponse?: shared.EventUpdateResponse;
    statusCode: number;
}
