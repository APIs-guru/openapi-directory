import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DatacatalogEntriesLookupQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    linkedResource?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sqlResource?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DatacatalogEntriesLookupSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DatacatalogEntriesLookupRequest extends SpeakeasyBase {
    queryParams: DatacatalogEntriesLookupQueryParams;
    security: DatacatalogEntriesLookupSecurity;
}
export declare class DatacatalogEntriesLookupResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDatacatalogV1beta1Entry?: shared.GoogleCloudDatacatalogV1beta1Entry;
    statusCode: number;
}
