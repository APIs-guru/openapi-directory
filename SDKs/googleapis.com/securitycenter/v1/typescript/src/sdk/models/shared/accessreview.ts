import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AccessReview
/** 
 * Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
**/
export class AccessReview extends SpeakeasyBase {
  @Metadata({ data: "json, name=group" })
  group?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ns" })
  ns?: string;

  @Metadata({ data: "json, name=resource" })
  resource?: string;

  @Metadata({ data: "json, name=subresource" })
  subresource?: string;

  @Metadata({ data: "json, name=verb" })
  verb?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
