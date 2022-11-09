import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LanguagePackageDependency
/** 
 * Indicates a language package available between this package and the customer's resource artifact.
**/
export class LanguagePackageDependency extends SpeakeasyBase {
  @Metadata({ data: "json, name=package" })
  package?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
