import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Locality
/** 
 * Identifies location of where either Envoy runs or where upstream hosts run.
**/
export class Locality extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=subZone" })
  subZone?: string;

  @SpeakeasyMetadata({ data: "json, name=zone" })
  zone?: string;
}
