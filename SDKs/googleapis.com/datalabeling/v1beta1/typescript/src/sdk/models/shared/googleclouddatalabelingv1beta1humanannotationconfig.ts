import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDatalabelingV1beta1HumanAnnotationConfig
/** 
 * Configuration for how human labeling task should be done.
**/
export class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotatedDatasetDescription" })
  annotatedDatasetDescription?: string;

  @Metadata({ data: "json, name=annotatedDatasetDisplayName" })
  annotatedDatasetDisplayName?: string;

  @Metadata({ data: "json, name=contributorEmails" })
  contributorEmails?: string[];

  @Metadata({ data: "json, name=instruction" })
  instruction?: string;

  @Metadata({ data: "json, name=labelGroup" })
  labelGroup?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=questionDuration" })
  questionDuration?: string;

  @Metadata({ data: "json, name=replicaCount" })
  replicaCount?: number;

  @Metadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}
