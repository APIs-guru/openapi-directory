import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SingleFieldDependency } from "./singlefielddependency";
import { ConditionalSingleFieldDependency } from "./conditionalsinglefielddependency";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";


// ExtensionActionDefinitionPatch
/** 
 * Fields on custom workflow action to be updated.
**/
export class ExtensionActionDefinitionPatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionUrl" })
  actionUrl?: string;

  @Metadata({ data: "json, name=inputFieldDependencies" })
  inputFieldDependencies?: any[];

  @Metadata({ data: "json, name=inputFields", elemType: shared.InputFieldDefinition })
  inputFields?: InputFieldDefinition[];

  @Metadata({ data: "json, name=labels", elemType: shared.ActionLabels })
  labels?: Map<string, ActionLabels>;

  @Metadata({ data: "json, name=objectRequestOptions" })
  objectRequestOptions?: ObjectRequestOptions;

  @Metadata({ data: "json, name=objectTypes" })
  objectTypes?: string[];

  @Metadata({ data: "json, name=published" })
  published?: boolean;
}
