import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Date } from "./date";
import { FieldMetadata } from "./fieldmetadata";
import { Date } from "./date";


// Organization
/** 
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
export class Organization extends SpeakeasyBase {
  @Metadata({ data: "json, name=costCenter" })
  costCenter?: string;

  @Metadata({ data: "json, name=current" })
  current?: boolean;

  @Metadata({ data: "json, name=department" })
  department?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @Metadata({ data: "json, name=fullTimeEquivalentMillipercent" })
  fullTimeEquivalentMillipercent?: number;

  @Metadata({ data: "json, name=jobDescription" })
  jobDescription?: string;

  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phoneticName" })
  phoneticName?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: Date;

  @Metadata({ data: "json, name=symbol" })
  symbol?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
