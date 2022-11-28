import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudHealthcareSource
/** 
 * Cloud Healthcare API resource.
**/
export class CloudHealthcareSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
