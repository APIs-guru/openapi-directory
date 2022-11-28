import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtifact } from "./consentartifact";
export declare class ListConsentArtifactsResponse extends SpeakeasyBase {
    consentArtifacts?: ConsentArtifact[];
    nextPageToken?: string;
}
