import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudHealthcareSource
/** 
 * Cloud Healthcare API resource.
**/
export class CloudHealthcareSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
