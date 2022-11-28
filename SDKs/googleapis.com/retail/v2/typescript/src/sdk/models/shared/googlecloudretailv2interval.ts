import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudRetailV2Interval
/** 
 * A floating point interval.
**/
export class GoogleCloudRetailV2Interval extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclusiveMaximum" })
  exclusiveMaximum?: number;

  @SpeakeasyMetadata({ data: "json, name=exclusiveMinimum" })
  exclusiveMinimum?: number;

  @SpeakeasyMetadata({ data: "json, name=maximum" })
  maximum?: number;

  @SpeakeasyMetadata({ data: "json, name=minimum" })
  minimum?: number;
}
