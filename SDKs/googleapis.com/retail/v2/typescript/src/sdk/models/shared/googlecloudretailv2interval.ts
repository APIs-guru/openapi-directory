import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2Interval
/** 
 * A floating point interval.
**/
export class GoogleCloudRetailV2Interval extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusiveMaximum" })
  exclusiveMaximum?: number;

  @Metadata({ data: "json, name=exclusiveMinimum" })
  exclusiveMinimum?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;
}
