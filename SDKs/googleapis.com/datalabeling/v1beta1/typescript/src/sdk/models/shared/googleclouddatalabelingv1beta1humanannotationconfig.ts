import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDatalabelingV1beta1HumanAnnotationConfig
/** 
 * Configuration for how human labeling task should be done.
**/
export class GoogleCloudDatalabelingV1beta1HumanAnnotationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotatedDatasetDescription" })
  annotatedDatasetDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=annotatedDatasetDisplayName" })
  annotatedDatasetDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=contributorEmails" })
  contributorEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=instruction" })
  instruction?: string;

  @SpeakeasyMetadata({ data: "json, name=labelGroup" })
  labelGroup?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=questionDuration" })
  questionDuration?: string;

  @SpeakeasyMetadata({ data: "json, name=replicaCount" })
  replicaCount?: number;

  @SpeakeasyMetadata({ data: "json, name=userEmailAddress" })
  userEmailAddress?: string;
}
