import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CaOptions
/** 
 * Describes values that are relevant in a CA certificate.
**/
export class CaOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=isCa" })
  isCa?: boolean;

  @Metadata({ data: "json, name=maxIssuerPathLength" })
  maxIssuerPathLength?: number;
}
