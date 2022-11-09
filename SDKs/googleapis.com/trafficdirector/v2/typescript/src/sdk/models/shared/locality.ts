import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Locality
/** 
 * Identifies location of where either Envoy runs or where upstream hosts run.
**/
export class Locality extends SpeakeasyBase {
  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=subZone" })
  subZone?: string;

  @Metadata({ data: "json, name=zone" })
  zone?: string;
}
