import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProvidedSoftwareCatalog
/** 
 * The currently provided software environment on the devices under test.
**/
export class ProvidedSoftwareCatalog extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidxOrchestratorVersion" })
  androidxOrchestratorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=orchestratorVersion" })
  orchestratorVersion?: string;
}
