import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentAuditViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=modificationType" })
  modificationType?: string;

  @Metadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @Metadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @Metadata({ data: "json, name=notesAfter" })
  notesAfter?: string;

  @Metadata({ data: "json, name=notesBefore" })
  notesBefore?: string;

  @Metadata({ data: "json, name=statusAfter" })
  statusAfter?: string;

  @Metadata({ data: "json, name=statusBefore" })
  statusBefore?: string;
}
