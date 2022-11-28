import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SetLabelsRequest
/** 
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
**/
export class SetLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @SpeakeasyMetadata({ data: "json, name=labelFingerprint" })
  labelFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
