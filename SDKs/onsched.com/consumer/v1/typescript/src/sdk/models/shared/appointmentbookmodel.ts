import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AppointmentBookModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=phoneExt" })
  phoneExt?: string;

  @Metadata({ data: "json, name=phoneType" })
  phoneType?: string;
}
