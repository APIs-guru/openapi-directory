import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CivicinfoElectionsVoterInfoQueryQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    address: string;
    alt?: shared.AltEnum;
    callback?: string;
    electionId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    officialOnly?: boolean;
    prettyPrint?: boolean;
    quotaUser?: string;
    returnAllAvailableData?: boolean;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CivicinfoElectionsVoterInfoQueryRequest extends SpeakeasyBase {
    queryParams: CivicinfoElectionsVoterInfoQueryQueryParams;
}
export declare class CivicinfoElectionsVoterInfoQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    voterInfoResponse?: shared.VoterInfoResponse;
}
