import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2betaAudience
/** 
 * An intended audience of the Product for whom it's sold.
**/
export class GoogleCloudRetailV2betaAudience extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageGroups" })
  ageGroups?: string[];

  @Metadata({ data: "json, name=genders" })
  genders?: string[];
}
