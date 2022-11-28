import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ActionFunctionIdentifier } from "./actionfunctionidentifier";
import { SingleFieldDependency } from "./singlefielddependency";
import { ConditionalSingleFieldDependency } from "./conditionalsinglefielddependency";
import { InputFieldDefinition } from "./inputfielddefinition";
import { ActionLabels } from "./actionlabels";
import { ObjectRequestOptions } from "./objectrequestoptions";



// ExtensionActionDefinition
/** 
 * Configuration for custom workflow action.
**/
export class ExtensionActionDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionUrl" })
  actionUrl: string;

  @SpeakeasyMetadata({ data: "json, name=archivedAt" })
  archivedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=functions", elemType: ActionFunctionIdentifier })
  functions: ActionFunctionIdentifier[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

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

  @SpeakeasyMetadata({ data: "json, name=revisionId" })
  revisionId: string;
}
