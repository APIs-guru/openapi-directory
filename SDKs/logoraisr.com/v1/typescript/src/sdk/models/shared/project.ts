import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Process } from "./process";



export class Project extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=file_id" })
  fileId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=paypal_payment_id" })
  paypalPaymentId?: string;

  @SpeakeasyMetadata({ data: "json, name=process" })
  process?: Process;

  @SpeakeasyMetadata({ data: "json, name=process_id" })
  processId: string;

  @SpeakeasyMetadata({ data: "json, name=project_number" })
  projectNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=project_title" })
  projectTitle?: string;

  @SpeakeasyMetadata({ data: "json, name=result_file_id" })
  resultFileId?: string;
}
