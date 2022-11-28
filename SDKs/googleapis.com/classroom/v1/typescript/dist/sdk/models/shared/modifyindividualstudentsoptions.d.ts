import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
**/
export declare class ModifyIndividualStudentsOptions extends SpeakeasyBase {
    addStudentIds?: string[];
    removeStudentIds?: string[];
}
