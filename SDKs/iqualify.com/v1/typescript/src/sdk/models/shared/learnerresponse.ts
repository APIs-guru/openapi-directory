import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OfferingProgressRow } from "./offeringprogressrow";



export class LearnerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=firstName" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=lastName" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=offerings", elemType: OfferingProgressRow })
  offerings?: OfferingProgressRow[];

  @SpeakeasyMetadata({ data: "json, name=personId" })
  personId?: string;
}
