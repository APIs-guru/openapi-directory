import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CaOptions
/** 
 * Describes values that are relevant in a CA certificate.
**/
export class CaOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isCa" })
  isCa?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxIssuerPathLength" })
  maxIssuerPathLength?: number;
}
