import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConsentArtifact } from "./consentartifact";


export class ListConsentArtifactsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=consentArtifacts", elemType: shared.ConsentArtifact })
  consentArtifacts?: ConsentArtifact[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
