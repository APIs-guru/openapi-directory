import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OfferingProgressRow } from "./offeringprogressrow";


export class LearnerResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=firstName" })
  firstName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=lastName" })
  lastName?: string;

  @Metadata({ data: "json, name=offerings", elemType: shared.OfferingProgressRow })
  offerings?: OfferingProgressRow[];

  @Metadata({ data: "json, name=personId" })
  personId?: string;
}
