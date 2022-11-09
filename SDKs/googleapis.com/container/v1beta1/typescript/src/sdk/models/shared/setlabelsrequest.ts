import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SetLabelsRequest
/** 
 * SetLabelsRequest sets the Google Cloud Platform labels on a Google Container Engine cluster, which will in turn set them for Google Compute Engine resources used by that cluster
**/
export class SetLabelsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=clusterId" })
  clusterId?: string;

  @Metadata({ data: "json, name=labelFingerprint" })
  labelFingerprint?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=resourceLabels" })
  resourceLabels?: Map<string, string>;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
