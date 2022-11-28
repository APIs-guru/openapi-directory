import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AccessReview
/** 
 * Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
**/
export class AccessReview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=group" })
  group?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ns" })
  ns?: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource?: string;

  @SpeakeasyMetadata({ data: "json, name=subresource" })
  subresource?: string;

  @SpeakeasyMetadata({ data: "json, name=verb" })
  verb?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
