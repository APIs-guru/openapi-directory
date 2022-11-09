import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApplicationStatusCode } from "./applicationstatuscode";
import { Qualification } from "./qualification";
import { Subactivity } from "./subactivity";


export class ApplicationList extends SpeakeasyBase {
  @Metadata({ data: "json, name=cert_authority" })
  certAuthority?: string;

  @Metadata({ data: "json, name=certificate" })
  certificate?: string;

  @Metadata({ data: "json, name=current_status" })
  currentStatus?: ApplicationStatusCode;

  @Metadata({ data: "json, name=display_status" })
  displayStatus?: string;

  @Metadata({ data: "json, name=qualifications", elemType: shared.Qualification })
  qualifications?: Qualification[];

  @Metadata({ data: "json, name=removal_date" })
  removalDate?: Date;

  @Metadata({ data: "json, name=subactivity" })
  subactivity: Subactivity;
}
