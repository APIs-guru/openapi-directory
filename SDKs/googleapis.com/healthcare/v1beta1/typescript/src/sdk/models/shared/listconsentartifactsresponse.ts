import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsentArtifact } from "./consentartifact";



export class ListConsentArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consentArtifacts", elemType: ConsentArtifact })
  consentArtifacts?: ConsentArtifact[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
