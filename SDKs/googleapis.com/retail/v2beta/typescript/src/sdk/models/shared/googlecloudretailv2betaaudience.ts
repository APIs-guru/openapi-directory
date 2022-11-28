import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2betaAudience
/** 
 * An intended audience of the Product for whom it's sold.
**/
export class GoogleCloudRetailV2betaAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageGroups" })
  ageGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=genders" })
  genders?: string[];
}
