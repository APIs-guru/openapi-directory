import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ArtifactHashes } from "./artifacthashes";


export class GrafeasV1beta1IntotoArtifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=hashes" })
  hashes?: ArtifactHashes;

  @Metadata({ data: "json, name=resourceUri" })
  resourceUri?: string;
}
