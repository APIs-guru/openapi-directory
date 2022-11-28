import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentAuditViewModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointmentId" })
  appointmentId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=modificationType" })
  modificationType?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedBy" })
  modifiedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=modifiedOn" })
  modifiedOn?: Date;

  @SpeakeasyMetadata({ data: "json, name=notesAfter" })
  notesAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=notesBefore" })
  notesBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=statusAfter" })
  statusAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=statusBefore" })
  statusBefore?: string;
}
