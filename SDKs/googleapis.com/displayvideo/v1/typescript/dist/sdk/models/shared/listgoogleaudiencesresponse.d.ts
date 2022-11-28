import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleAudience } from "./googleaudience";
export declare class ListGoogleAudiencesResponse extends SpeakeasyBase {
    googleAudiences?: GoogleAudience[];
    nextPageToken?: string;
}
