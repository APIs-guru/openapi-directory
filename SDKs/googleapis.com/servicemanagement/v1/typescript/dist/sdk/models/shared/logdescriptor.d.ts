import { SpeakeasyBase } from "../../../internal/utils";
import { LabelDescriptor } from "./labeldescriptor";
/**
 * A description of a log type. Example in YAML format: - name: library.googleapis.com/activity_history description: The history of borrowing and returning library items. display_name: Activity labels: - key: /customer_id description: Identifier of a library customer
**/
export declare class LogDescriptor extends SpeakeasyBase {
    description?: string;
    displayName?: string;
    labels?: LabelDescriptor[];
    name?: string;
}
