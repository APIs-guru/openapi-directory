import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Date } from "./date";
import { FieldMetadataInput } from "./fieldmetadata";
import { FieldMetadata } from "./fieldmetadata";



// OrganizationInput
/** 
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
export class OrganizationInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costCenter" })
  costCenter?: string;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=fullTimeEquivalentMillipercent" })
  fullTimeEquivalentMillipercent?: number;

  @SpeakeasyMetadata({ data: "json, name=jobDescription" })
  jobDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadataInput;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticName" })
  phoneticName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


// Organization
/** 
 * A person's past or current organization. Overlapping date ranges are permitted.
**/
export class Organization extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=costCenter" })
  costCenter?: string;

  @SpeakeasyMetadata({ data: "json, name=current" })
  current?: boolean;

  @SpeakeasyMetadata({ data: "json, name=department" })
  department?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=formattedType" })
  formattedType?: string;

  @SpeakeasyMetadata({ data: "json, name=fullTimeEquivalentMillipercent" })
  fullTimeEquivalentMillipercent?: number;

  @SpeakeasyMetadata({ data: "json, name=jobDescription" })
  jobDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: FieldMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneticName" })
  phoneticName?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=symbol" })
  symbol?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
