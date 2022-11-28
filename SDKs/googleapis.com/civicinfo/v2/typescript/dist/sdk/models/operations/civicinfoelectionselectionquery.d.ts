import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CivicinfoElectionsElectionQueryQueryParams extends SpeakeasyBase {
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
}
export declare class CivicinfoElectionsElectionQueryRequest extends SpeakeasyBase {
    queryParams: CivicinfoElectionsElectionQueryQueryParams;
}
export declare class CivicinfoElectionsElectionQueryResponse extends SpeakeasyBase {
    contentType: string;
    electionsQueryResponse?: shared.ElectionsQueryResponse;
    statusCode: number;
}
