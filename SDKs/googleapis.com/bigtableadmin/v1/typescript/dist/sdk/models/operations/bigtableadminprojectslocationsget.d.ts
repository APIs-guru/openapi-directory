import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BigtableadminProjectsLocationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum BigtableadminProjectsLocationsGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    NameOnly = "NAME_ONLY",
    SchemaView = "SCHEMA_VIEW",
    ReplicationView = "REPLICATION_VIEW",
    EncryptionView = "ENCRYPTION_VIEW",
    Full = "FULL"
}
export declare class BigtableadminProjectsLocationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: BigtableadminProjectsLocationsGetViewEnum;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption5 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption6 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurityOption7 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class BigtableadminProjectsLocationsGetSecurity extends SpeakeasyBase {
    option1?: BigtableadminProjectsLocationsGetSecurityOption1;
    option2?: BigtableadminProjectsLocationsGetSecurityOption2;
    option3?: BigtableadminProjectsLocationsGetSecurityOption3;
    option4?: BigtableadminProjectsLocationsGetSecurityOption4;
    option5?: BigtableadminProjectsLocationsGetSecurityOption5;
    option6?: BigtableadminProjectsLocationsGetSecurityOption6;
    option7?: BigtableadminProjectsLocationsGetSecurityOption7;
}
export declare class BigtableadminProjectsLocationsGetRequest extends SpeakeasyBase {
    pathParams: BigtableadminProjectsLocationsGetPathParams;
    queryParams: BigtableadminProjectsLocationsGetQueryParams;
    security: BigtableadminProjectsLocationsGetSecurity;
}
export declare class BigtableadminProjectsLocationsGetResponse extends SpeakeasyBase {
    contentType: string;
    location?: shared.Location;
    statusCode: number;
}
