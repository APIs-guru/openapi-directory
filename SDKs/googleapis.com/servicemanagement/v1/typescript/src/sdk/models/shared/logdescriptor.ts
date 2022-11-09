import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LabelDescriptor } from "./labeldescriptor";


// LogDescriptor
/** 
 * A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer
**/
export class LogDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=labels", elemType: shared.LabelDescriptor })
  labels?: LabelDescriptor[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
