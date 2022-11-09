import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudRetailV2alphaInterval
/** 
 * A floating point interval.
**/
export class GoogleCloudRetailV2alphaInterval extends SpeakeasyBase {
  @Metadata({ data: "json, name=exclusiveMaximum" })
  exclusiveMaximum?: number;

  @Metadata({ data: "json, name=exclusiveMinimum" })
  exclusiveMinimum?: number;

  @Metadata({ data: "json, name=maximum" })
  maximum?: number;

  @Metadata({ data: "json, name=minimum" })
  minimum?: number;
}
