import { SpeakeasyBase } from "../../../internal/utils";
/**
 * User specified security marks that are attached to the parent Security Command Center resource. Security marks are scoped within a Security Command Center organization -- they can be modified and viewed by all users who have proper permissions on the organization.
**/
export declare class SecurityMarks extends SpeakeasyBase {
    canonicalName?: string;
    marks?: Map<string, string>;
    name?: string;
}
