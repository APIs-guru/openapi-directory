import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AppointmentBookModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerMessage" })
  customerMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=groupSize" })
  groupSize?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneExt" })
  phoneExt?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneType" })
  phoneType?: string;
}
