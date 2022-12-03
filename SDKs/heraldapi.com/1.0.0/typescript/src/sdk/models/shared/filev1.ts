import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum FileV1FormatEnum {
    Pdf = "pdf",
    Csv = "csv",
    Jpg = "jpg",
    Png = "png"
}

export enum FileV1StatusEnum {
    Available = "available",
    Deleted = "deleted"
}

export enum FileV1TypeEnum {
    QuoteSummary = "quote_summary",
    PolicySpecimen = "policy_specimen",
    CyberRiskAssement = "cyber_risk_assement",
    ApplicationSummary = "application_summary"
}


// FileV1
/** 
 * Details for a specific file.
**/
export class FileV1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: FileV1FormatEnum;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: FileV1StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: FileV1TypeEnum;
}
