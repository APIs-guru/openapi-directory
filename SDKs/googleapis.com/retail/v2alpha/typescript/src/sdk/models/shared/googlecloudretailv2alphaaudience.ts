import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2alphaAudience
/** 
 * An intended audience of the Product for whom it's sold.
**/
export class GoogleCloudRetailV2alphaAudience extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ageGroups" })
  ageGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=genders" })
  genders?: string[];
}
