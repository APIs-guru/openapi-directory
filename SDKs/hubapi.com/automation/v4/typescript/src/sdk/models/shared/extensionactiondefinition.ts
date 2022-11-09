import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=actionUrl" })
  actionUrl: string;

  @Metadata({ data: "json, name=archivedAt" })
  archivedAt?: number;

  @Metadata({ data: "json, name=functions", elemType: shared.ActionFunctionIdentifier })
  functions: ActionFunctionIdentifier[];

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=inputFieldDependencies" })
  inputFieldDependencies?: any[];

  @Metadata({ data: "json, name=inputFields", elemType: shared.InputFieldDefinition })
  inputFields: InputFieldDefinition[];

  @Metadata({ data: "json, name=labels", elemType: shared.ActionLabels })
  labels: Map<string, ActionLabels>;

  @Metadata({ data: "json, name=objectRequestOptions" })
  objectRequestOptions?: ObjectRequestOptions;

  @Metadata({ data: "json, name=objectTypes" })
  objectTypes: string[];

  @Metadata({ data: "json, name=published" })
  published: boolean;

  @Metadata({ data: "json, name=revisionId" })
  revisionId: string;
}
