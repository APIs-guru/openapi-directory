import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ImportDomainRequest
/** 
 * Request for the `ImportDomain` method.
**/
export class ImportDomainRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}
