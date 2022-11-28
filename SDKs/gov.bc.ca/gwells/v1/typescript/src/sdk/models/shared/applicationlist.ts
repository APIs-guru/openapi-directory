import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApplicationStatusCode } from "./applicationstatuscode";
import { Qualification } from "./qualification";
import { Subactivity } from "./subactivity";



export class ApplicationList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cert_authority" })
  certAuthority?: string;

  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: string;

  @SpeakeasyMetadata({ data: "json, name=current_status" })
  currentStatus?: ApplicationStatusCode;

  @SpeakeasyMetadata({ data: "json, name=display_status" })
  displayStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=qualifications", elemType: Qualification })
  qualifications?: Qualification[];

  @SpeakeasyMetadata({ data: "json, name=removal_date" })
  removalDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=subactivity" })
  subactivity: Subactivity;
}
