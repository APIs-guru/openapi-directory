import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AppointmentAuditViewModel extends SpeakeasyBase {
    appointmentId?: string;
    id?: string;
    modificationType?: string;
    modifiedBy?: string;
    modifiedOn?: Date;
    notesAfter?: string;
    notesBefore?: string;
    statusAfter?: string;
    statusBefore?: string;
}
