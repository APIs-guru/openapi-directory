import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplicationDocumentCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=document_type" })
  documentType: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;
}
