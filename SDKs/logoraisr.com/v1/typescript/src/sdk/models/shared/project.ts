import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Process } from "./process";


export class Project extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=file_id" })
  fileId?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=paypal_payment_id" })
  paypalPaymentId?: string;

  @Metadata({ data: "json, name=process" })
  process?: Process;

  @Metadata({ data: "json, name=process_id" })
  processId: string;

  @Metadata({ data: "json, name=project_number" })
  projectNumber?: number;

  @Metadata({ data: "json, name=project_title" })
  projectTitle?: string;

  @Metadata({ data: "json, name=result_file_id" })
  resultFileId?: string;
}
