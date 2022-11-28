import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ArtifactHashes } from "./artifacthashes";



export class GrafeasV1beta1IntotoArtifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hashes" })
  hashes?: ArtifactHashes;

  @SpeakeasyMetadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
