import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProvidedSoftwareCatalog
/** 
 * The currently provided software environment on the devices under test.
**/
export class ProvidedSoftwareCatalog extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidxOrchestratorVersion" })
  androidxOrchestratorVersion?: string;

  @Metadata({ data: "json, name=orchestratorVersion" })
  orchestratorVersion?: string;
}
