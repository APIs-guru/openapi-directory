import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ImportDomainRequest
/** 
 * Request for the `ImportDomain` method.
**/
export class ImportDomainRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
