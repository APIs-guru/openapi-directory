import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionFunction } from "./actionfunction";
import { SingleFieldDependency } from "./singlefielddependency";
import { ConditionalSingleFieldDependency } from "./conditionalsinglefielddependency";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";



// ExtensionActionDefinitionInput
/** 
 * State of custom workflow action to be created.
**/
export class ExtensionActionDefinitionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionUrl" })
  actionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=archivedAt" })
  archivedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=functions", elemType: ActionFunction })
  functions: ActionFunction[];

  @SpeakeasyMetadata({ data: "json, name=inputFieldDependencies" })
  inputFieldDependencies?: any[];

  @SpeakeasyMetadata({ data: "json, name=inputFields", elemType: InputFieldDefinition })
  inputFields: InputFieldDefinition[];

  @SpeakeasyMetadata({ data: "json, name=labels", elemType: ActionLabels })
  labels: Map<string, ActionLabels>;

  @SpeakeasyMetadata({ data: "json, name=objectRequestOptions" })
  objectRequestOptions?: ObjectRequestOptions;

  @SpeakeasyMetadata({ data: "json, name=objectTypes" })
  objectTypes: string[];

  @SpeakeasyMetadata({ data: "json, name=published" })
  published: boolean;
}
