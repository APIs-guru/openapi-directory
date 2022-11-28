import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LanguagePackageDependency
/** 
 * Indicates a language package available between this package and the customer's resource artifact.
**/
export class LanguagePackageDependency extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=package" })
  package?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}
