import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateRequest extends SpeakeasyBase {
    pathParams: DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreatePathParams;
    queryParams: DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateQueryParams;
    request?: shared.GoogleCloudDataplexV1PartitionInput;
    security: DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateSecurity;
}
export declare class DataplexProjectsLocationsLakesZonesEntitiesPartitionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDataplexV1Partition?: shared.GoogleCloudDataplexV1Partition;
    statusCode: number;
}
