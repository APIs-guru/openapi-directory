import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRecommenderV1beta1SustainabilityProjection
/** 
 * Contains metadata about how much sustainability a recommendation can save or incur.
**/
export class GoogleCloudRecommenderV1beta1SustainabilityProjection extends SpeakeasyBase {
  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=kgCO2e" })
  kgCo2e?: number;
}
