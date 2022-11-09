import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2Audience
/** 
 * An intended audience of the Product for whom it's sold.
**/
export class GoogleCloudRetailV2Audience extends SpeakeasyBase {
  @Metadata({ data: "json, name=ageGroups" })
  ageGroups?: string[];

  @Metadata({ data: "json, name=genders" })
  genders?: string[];
}
