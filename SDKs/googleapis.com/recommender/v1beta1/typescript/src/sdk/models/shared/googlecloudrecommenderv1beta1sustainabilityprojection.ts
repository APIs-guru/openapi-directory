import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRecommenderV1beta1SustainabilityProjection
/** 
 * Contains metadata about how much sustainability a recommendation can save or incur.
**/
export class GoogleCloudRecommenderV1beta1SustainabilityProjection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=kgCO2e" })
  kgCo2e?: number;
}
